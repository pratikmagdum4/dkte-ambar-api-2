import express from "express";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import FacultySignUpModel from "../../models/SignUp/CoFacultySignUpModel.js";
const FacultyLogin = async (req, res) => {
  const { email, password } = req.body;
  console.log("email is ", email, password);
  try {
    const existingFaculty = await FacultySignUpModel.findOne({ email });
    if (!existingFaculty) {
      return res.status(404).json({ message: "Admin doesn't exist" });
    }

    const isPasswordCorrect = await bcrypt.compare(
      password,
      existingFaculty.password
    );
    console.log(isPasswordCorrect);
    if (!isPasswordCorrect) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign(
      { id: existingFaculty._id },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );
    const role = "faculty";
    res.status(200).json({ result: existingFaculty, token, role });
  } catch (error) {
    res.status(500).json({ message: "Something went wrong" });
  }
};

export { FacultyLogin };
