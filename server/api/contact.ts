import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const body = await readBody(event)

  const {
    name,
    whatsapp,
    level
  } = body

  // Validation
  if (!name || !whatsapp) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and WhatsApp number are required'
    })
  }

  // Clean WhatsApp number
  const cleanWhatsapp = String(whatsapp).replace(/\s/g, '')

  // Escape HTML
  const escapeHtml = (value: string) => {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  const safeName = escapeHtml(String(name))
  const safeWhatsapp = escapeHtml(cleanWhatsapp)
  const safeLevel = level
    ? escapeHtml(String(level))
    : 'Non renseigné'

  // SMTP transporter
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,
    auth: {
      user: config.zohoUser,
      pass: config.zohoPass
    }
  })

  // Verify SMTP connection
  await transporter.verify()

  // Send email
  await transporter.sendMail({
    from: `"EasyTalk" <${config.zohoUser}>`,
    to: 'aziz@gaou.online, ossamabolmani@gmail.com',

    subject: `EasyTalk - Nouvelle inscription : ${name}`,

    html: `
      <div
        dir="rtl"
        style="
          font-family: Arial, sans-serif;
          max-width: 600px;
          margin: auto;
          padding: 30px;
        "
      >
        <h2 style="color: #06213d;">
          🎉 تسجيل جديد في EasyTalk
        </h2>

        <hr>

        <p>
          <strong>الاسم الكامل:</strong><br>
          ${safeName}
        </p>

        <p>
          <strong>رقم الواتساب:</strong><br>
          ${safeWhatsapp}
        </p>

        <p>
          <strong>مستوى اللغة الإنجليزية:</strong><br>
          ${safeLevel}
        </p>

        <hr>

        <p>
          <strong>👥 دورة جماعية:</strong>
          <span style="text-decoration: line-through;">
            800dh
          </span>
          <strong style="color: #f97316;">
            500dh
          </strong>
          لـ 3 أشهر
        </p>

        <p>
          <strong>🎯 حصص فردية:</strong>
          <span style="text-decoration: line-through;">
            150dh
          </span>
          <strong style="color: #f97316;">
            100dh
          </strong>
          للحصة
        </p>

        <hr>

        <p style="color: #666;">
          تم إرسال هذا الطلب من نموذج التسجيل في موقع EasyTalk.
        </p>
      </div>
    `
  })

  return {
    success: true,
    message: 'Email sent successfully'
  }
})
