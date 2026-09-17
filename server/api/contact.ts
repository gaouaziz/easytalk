// server/api/contact.ts
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const config = useRuntimeConfig()

  const body = await readBody(event)
  const { name, email, objective } = body

  // Validate form
  if (!name || !email || !objective) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Missing fields'
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
      replyTo: email,
      subject: `EasyTalk New Registration: ${name}`,

      html: `
        <p>
          <strong>Name:</strong> ${name}
        </p>

        <p>
          <strong>Email:</strong> ${email}
        </p>

        <p>
          <strong>Goal:</strong> ${objective}
        </p>
      `
    })

    console.log('Email sent successfully')

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
