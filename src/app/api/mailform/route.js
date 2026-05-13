import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const body = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      from: `Taciti Enquiry <${process.env.EMAIL_USER}>`,
      replyTo: body.email,
      to: "info@taciti.com",
      subject: `Enquiry From - ${body.firstName}`,

      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2 style="color:#2e6c80;">New Enquiry from Taciti</h2>

          <table style="width:100%; border-collapse:collapse;">

            <tr>
              <td><strong>Name</strong></td>
              <td>${body.firstName} ${body.lastName}</td>
            </tr>

            <tr>
              <td><strong>Email</strong></td>
              <td>${body.email}</td>
            </tr>

            <tr>
              <td><strong>Phone</strong></td>
              <td>${body.phone}</td>
            </tr>

            <tr>
              <td><strong>Company</strong></td>
              <td>${body.company}</td>
            </tr>

            <tr>
              <td><strong>Country</strong></td>
              <td>${body.country}</td>
            </tr>

            <tr>
              <td><strong>Service</strong></td>
              <td>${body.selectedService}</td>
            </tr>

            <tr>
              <td><strong>Industry</strong></td>
              <td>${body.selectedIndustry}</td>
            </tr>

            <tr>
              <td><strong>Description</strong></td>
              <td>${body.description}</td>
            </tr>

          </table>
        </div>
      `,
    };

    const info = await transporter.sendMail(mailOptions);

    console.log("EMAIL SENT:", info.response);

    return Response.json({
      success: true,
      message: "Email sent successfully",
    });

  } catch (error) {
    console.log("EMAIL ERROR:", error);

    return Response.json({
      success: false,
      message: "Error sending email",
      error: error.message,
    });
  }
}