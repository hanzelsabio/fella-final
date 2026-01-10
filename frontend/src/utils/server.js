import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.post("/api/send-email", async (req, res) => {
  const { first_name, last_name, email, phone, service, product, message } =
    req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: `"Website Inquiry" <${process.env.GMAIL_USER}>`,
      to: process.env.GMAIL_RECEIVER,
      replyTo: email,
      subject: `New Service Inquiry: ${service}`,
      html: `
        <h2>New Inquiry</h2>
        <p><strong>Name:</strong> ${first_name} ${last_name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Service:</strong> ${service}</p>
        <p><strong>Product:</strong> ${product}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
    });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Email failed to send" });
  }
});

app.listen(5000, () => {
  console.log("Server running on http://localhost:5000");
});
