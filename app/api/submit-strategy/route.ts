import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, businessType, niche, notes } = body

    // Validate required fields
    if (!name || !email || !businessType || !niche) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      )
    }

    // Check if email configuration is available
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS || 
        process.env.EMAIL_USER === 'your-email@gmail.com' || 
        process.env.EMAIL_PASS === 'your-app-password') {
      console.log('Email configuration not found. Form data:', { name, email, businessType, niche, notes })
      
      // For now, just log the data and return success
      // In production, you would want to set up the email configuration
      return NextResponse.json(
        { message: 'Form submitted successfully (email not configured)' },
        { status: 200 }
      )
    }

    // Create transporter using Gmail SMTP
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // Your Gmail address
        pass: process.env.EMAIL_PASS, // Your Gmail app password
      },
    })

    // Email content
    const emailContent = `
New Free Strategy Form Submission

Name: ${name}
Email: ${email}
Type of business: ${businessType}
Niche/industry: ${niche}
Additional notes: ${notes || 'No additional notes provided'}

---
This submission was received from the INSYNC free strategy tool.
    `.trim()

    // Email options
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'insyncsocial27@gmail.com',
      subject: `New Strategy Form Submission from ${name}`,
      text: emailContent,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4f46e5; border-bottom: 2px solid #4f46e5; padding-bottom: 10px;">
            New Free Strategy Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${name}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Type of business:</strong> ${businessType}</p>
            <p style="margin: 10px 0;"><strong>Niche/industry:</strong> ${niche}</p>
            <p style="margin: 10px 0;"><strong>Additional notes:</strong> ${notes || 'No additional notes provided'}</p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin: 20px 0;">
          <p style="color: #6b7280; font-size: 12px;">
            This submission was received from the INSYNC free strategy tool.
          </p>
        </div>
      `,
    }

    // Send email
    await transporter.sendMail(mailOptions)

    return NextResponse.json(
      { message: 'Form submitted successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    
    // Log the specific error for debugging
    if (error instanceof Error) {
      console.error('Error details:', error.message)
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to send email',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    )
  }
}
