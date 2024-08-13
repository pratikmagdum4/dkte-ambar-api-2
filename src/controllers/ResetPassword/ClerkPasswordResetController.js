import crypto from "crypto";
import ClerkSignUpModel from "../../models/SignUp/ClerkSignUpModel.js";
import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  service: "Gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export const sendClerkResetEmail = async (req, res) => {
  const { email } = req.body;
  const user = await ClerkSignUpModel.findOne({ email });

  if (!user) {
    return res.status(400).json({ message: "User does not exist" });
  }

  const token = crypto.randomBytes(20).toString("hex");
  user.resetPasswordToken = token;
  user.resetPasswordExpires = Date.now() + 3600000; // 1 hour

  await user.save();
const isLocal = process.env.NODE_ENV === "development"; // assuming NODE_ENV is set to 'development' for local and 'production' for deployed
const baseURL = isLocal
  ? "http://localhost:5173"
  : "https://dkte-amber-website.vercel.app";

  
  const role = "clerk"
  const resetURL = `${baseURL}/${role}/reset-password/${token}`;

  await transporter.sendMail({
    to: user.email,
    from: "no-reply@example.com",
    subject: "Password Reset Request",
    text: `You are receiving this because you (or someone else) have requested the reset of the password for your account.\n\n
        Please make a PUT request to the following URL to reset your password:\n\n
        ${resetURL}\n\n
        If you did not request this, please ignore this email and your password will remain unchanged.\n`,
  });

  res.status(200).json({ message: "Password reset email sent" });
};

export const resetClerkPassword = async (req, res) => {
  console.log("yea i came her ")
  const { token } = req.params;
  const { password } = req.body;
console.log("the datais ",password,token)
  const user = await ClerkSignUpModel.findOne({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: Date.now() },
  });

  console.log("THe user is ",user)
  if (!user) {
    return res
      .status(400)
      .json({ message: "Password reset token is invalid or has expired" });
  }

  user.password = password;
  user.resetPasswordToken = undefined;
  user.resetPasswordExpires = undefined;

  await user.save();

  res.status(200).json({ message: "Password has been reset" });
};
