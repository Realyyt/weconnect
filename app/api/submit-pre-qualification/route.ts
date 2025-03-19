import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Brevo API integration
    const API_KEY = process.env.BREVO_API_KEY

    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          name: "Kiavi Pre-qualification Applicant",
          email: "notifications@weconnectinvestmenttocapital.netlify.app",
        },
        to: [
          {
            email: "emmaisaac032@gmail.com",
            name: "Loan Team",
          },
        ],
        replyTo: {
          email: data.email,
          name: `${data.firstName} ${data.lastName}`,
        },
        subject: "New Pre-qualification Request",
        htmlContent: `
          <html>
            <body>
              <h2>New Pre-qualification Request</h2>
              <p><strong>Name:</strong> ${data.prefix} ${data.firstName} ${data.lastName}</p>
              <p><strong>Email:</strong> ${data.email}</p>
              <p><strong>Phone:</strong> ${data.phone}</p>
              <p><strong>State:</strong> ${data.state}</p>
              <p>Please contact this lead as soon as possible.</p>
            </body>
          </html>
        `,
      }),
    })

    if (!response.ok) {
      const errorData = await response.json()
      console.error("Brevo API error:", errorData)
      throw new Error("Failed to send email")
    }

    // Optional: Send confirmation email to the user
    await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "api-key": API_KEY || "",
      },
      body: JSON.stringify({
        sender: {
          name: "Kiavi Loans",
          email: "notifications@yourdomain.com",
        },
        to: [
          {
            email: data.email,
            name: `${data.firstName} ${data.lastName}`,
          },
        ],
        subject: "Your Pre-qualification Request - Kiavi Loans",
        htmlContent: `
          <html>
            <body>
              <h2>Thank You for Your Pre-qualification Request</h2>
              <p>Dear ${data.prefix} ${data.lastName},</p>
              <p>We've received your pre-qualification request for a fix-and-flip loan. One of our loan specialists will contact you shortly to discuss your financing options.</p>
              <p>Your submitted information:</p>
              <ul>
                <li><strong>Name:</strong> ${data.prefix} ${data.firstName} ${data.lastName}</li>
                <li><strong>Email:</strong> ${data.email}</li>
                <li><strong>Phone:</strong> ${data.phone}</li>
                <li><strong>State:</strong> ${data.state}</li>
              </ul>
              <p>If you have any immediate questions, please don't hesitate to contact us.</p>
              <p>Best regards,<br>The Kiavi Team</p>
            </body>
          </html>
        `,
      }),
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Error processing form submission:", error)
    return NextResponse.json({ error: "Failed to process submission" }, { status: 500 })
  }
}
