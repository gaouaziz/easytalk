// server/api/contact.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig(event)

  const body = await readBody(event)

  const {
    name,
    whatsapp,
    email,
    level
  } = body

  // Validate required fields
  if (!name || !whatsapp) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name and WhatsApp number are required'
    })
  }

  // Zoho credentials
  const zohoEmail = config.zohoUser
  const zohoPassword = config.zohoPass

  if (!zohoEmail || !zohoPassword) {
    console.error('Zoho credentials are missing')

    throw createError({
      statusCode: 500,
      statusMessage: 'Email service is not configured'
    })
  }

  // Escape HTML to prevent user input from being interpreted as HTML
  const escapeHtml = (value: string) => {
    return value
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;')
  }

  const safeName = escapeHtml(String(name))
  const safeWhatsapp = escapeHtml(String(whatsapp))
  const safeEmail = email
    ? escapeHtml(String(email))
    : 'Non renseigné'

  const safeLevel = level
    ? escapeHtml(String(level))
    : 'Non renseigné'

  // Zoho SMTP
  const transporter = nodemailer.createTransport({
    host: 'smtp.zoho.com',
    port: 465,
    secure: true,

    auth: {
      user: zohoEmail,
      pass: zohoPassword
    }
  })

  try {
    await transporter.sendMail({
      from: `"EasyTalk" <${zohoEmail}>`,
      to: 'aziz@gaou.online',

      // Only use replyTo when a valid email was provided
      ...(email && {
        replyTo: email
      }),

      subject: `EasyTalk - Nouvelle inscription : ${name}`,

      html: `
        <!DOCTYPE html>
        <html lang="ar" dir="rtl">
          <head>
            <meta charset="UTF-8">
            <title>EasyTalk - Nouvelle inscription</title>
          </head>

          <body
            style="
              margin: 0;
              padding: 20px;
              background-color: #f5f7fa;
              font-family: Arial, sans-serif;
              color: #1f2937;
            "
          >
            <div
              style="
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                border-radius: 12px;
                padding: 30px;
                border: 1px solid #e5e7eb;
              "
            >
              <h2
                style="
                  margin-top: 0;
                  color: #06213d;
                "
              >
                🎉 تسجيل جديد في EasyTalk
              </h2>

              <p>
                <strong>الاسم الكامل:</strong>
                ${safeName}
              </p>

              <p>
                <strong>رقم الواتساب:</strong>
                ${safeWhatsapp}
              </p>

              <p>
                <strong>Email:</strong>
                ${safeEmail}
              </p>

              <p>
                <strong>مستوى اللغة الإنجليزية:</strong>
                ${safeLevel}
              </p>

              <hr
                style="
                  margin: 25px 0;
                  border: none;
                  border-top: 1px solid #e5e7eb;
                "
              >

              <h3 style="color: #06213d;">
                العرض الحالي
              </h3>

              <p>
                👥 <strong>دورة جماعية:</strong>
                <span style="text-decoration: line-through; color: #9ca3af;">
                  800dh
                </span>
                <strong style="color: #f97316;">
                  500dh
                </strong>
                لـ 3 أشهر
              </p>

              <p>
                🎯 <strong>حصص فردية (1-on-1):</strong>
                <span style="text-decoration: line-through; color: #9ca3af;">
                  150dh
                </span>
                <strong style="color: #f97316;">
                  100dh
                </strong>
                للحصة
              </p>

              <hr
                style="
                  margin: 25px 0;
                  border: none;
                  border-top: 1px solid #e5e7eb;
                "
              >

              <p
                style="
                  color: #6b7280;
                  font-size: 13px;
                "
              >
                تم إرسال هذا الطلب من نموذج التسجيل في موقع EasyTalk.
              </p>
            </div>
          </body>
        </html>
      `
    })

    console.log('EasyTalk registration email sent successfully')

    return {
      success: true
    }
  } catch (error) {
    console.error('--- SMTP ERROR DETAILS ---')
    console.error(error)

    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email'
    })
  }
})
