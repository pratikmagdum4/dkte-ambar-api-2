import ClerkSignUpModel from "../../models/SignUp/ClerkSignUpModel.js";
import jwt from "jsonwebtoken";

export const clerkSignup = async (req, res) => {
  const { name, email, password, phoneNumber, department } = req.body;

  try {
    // Check if the user already exists
    const existingClerk = await ClerkSignUpModel.findOne({ email });
    if (existingClerk) {
      return res.status(400).json({ msg: "User already exists" });
    }

    // Create a new clerk
    const newClerk = new ClerkSignUpModel({
      name,
      email,
      password,
      phoneNumber,
      department,
    });

    // Save the clerk to the database
    await newClerk.save();

    // Generate JWT token
    const token = jwt.sign(
      { id: newClerk._id, role: "clerk" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    // Return response
    res
      .status(201)
      .json({ id: newClerk._id, name: newClerk.name, role: "clerk", token });
  } catch (error) {
    console.error("Error during clerk signup:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
