import AdminSignUpModel from "../../models/SignUp/AdminSignUpModel.js";
import jwt from "jsonwebtoken";

export const adminSignup = async (req, res) => {
  const { name, email, password, phoneNumber, department } = req.body;

  try {
    // Check if the user already exists
    const existingClerk = await AdminSignUpModel.findOne({ email });
    if (existingClerk) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new clerk
    const newAdmin = new AdminSignUpModel({
      name,
      email,
      password,
      phoneNumber,
      department,
    });

    // Save the clerk to the database
    await newAdmin.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newAdmin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Return response
    res
      .status(201)
      .json({ id: newAdmin._id, name: newAdmin.name, role: "admin", token });
  } catch (error) {
    console.error("Error during clerk signup:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
