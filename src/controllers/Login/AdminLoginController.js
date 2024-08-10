import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import AdminLoginModel from "../../models/SignUp/AdminSignUpModel.js";



const AdminLogin =  async (req, res) => {
  const { email, password } = req.body;
console.log("email is ",email)
  try {
    const existingAdmin = await AdminLoginModel.findOne({ email });
    if (!existingAdmin) {
      return res.status(404).json({ message: "Admin doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingAdmin.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: existingAdmin._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });
const role = "admin"
    res.status(200).json({ result: existingAdmin, token ,role});
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export  {AdminLogin};
