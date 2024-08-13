import express from "express";
import nodemailer from "nodemailer";
import ClerkSignUpModel from "../../models/SignUp/ClerkSignUpModel.js";

const router = express.Router();

router.post("/send-notification", async (req, res) => {
  const { description, department } = req.body;

  try {
   
    const clerk = await ClerkSignUpModel.findOne({ department });

    if (!clerk) {
      return res
        .status(400)
        .json({ error: "Clerk not found for the specified department" });
    }
console.log("The clerk email is ",clerk.email)

    let config = {
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAIL_PASSWORD,
      },
    };

    let transporter = nodemailer.createTransport(config)
    // Create transporter
  //  const transporter = nodemailer.createTransport({
  //    host: "smtp.ethereal.email",
  //    port: 587,
  //    auth: {
  //      user: "benjamin.greenholt83@ethereal.email",
  //      pass: "kvH3DbsWwa3TKcW9ny",
  //    },
  //  });

    // Email content with HTML/CSS structure
    const mailOptions = {
      from:'"Pratik"  <pratiksunilmagdum2003@gmail.com>',
      to: clerk.email,
      subject: "New Notification from Ambar  Admin",
      html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 10px;">
                    <h2 style="color: #4CAF50; text-align: center;">Notification from Admin</h2>
                    <p style="font-size: 16px; color: #555;">Dear ${clerk.name},</p>
                    <p style="font-size: 16px; color: #555;">You have received a new notification:</p>
                    <div style="padding: 15px; background-color: #f9f9f9; border-left: 4px solid #4CAF50; margin: 20px 0;">
                        <p style="font-size: 16px; color: #555;">${description}</p>
                    </div>
                    <p style="font-size: 16px; color: #555;">Please take the necessary actions.</p>
                    <p style="font-size: 16px; color: #555;">Best regards,</p>
                    <p style="font-size: 16px; color: #555;">Admin Team</p>
                </div>
            `,
    };

    // Send email
    await transporter.sendMail(mailOptions);
    console.log("sent maybe")
    res.status(200).json({ message: "Notification sent successfully" });
  } catch (error) {
    console.error("Error sending email:", error);
    res.status(500).json({ error: "Failed to send notification" });
  }
});

export default router;
