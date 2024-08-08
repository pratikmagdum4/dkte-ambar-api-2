import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import ClerkSignUpModel from "../../models/SignUp/ClerkSignUpModel.js";



const ClerkLogin  = async (req, res) => {
    console.log("i m in fucnt")
  const { email, password } = req.body;
  const { department } = req.params;
console.log("thte depart is ",department)
console.log("thte email is ",email)
  try {

    const existingClerk = await ClerkSignUpModel.findOne({ email, department });
    console.log("the user is ",existingClerk)
    if (!existingClerk) {
      return res.status(401).json({ message: "Clerk doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingClerk.password
    );
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: existingClerk._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.status(200).json({ result: existingClerk, token });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { ClerkLogin};
