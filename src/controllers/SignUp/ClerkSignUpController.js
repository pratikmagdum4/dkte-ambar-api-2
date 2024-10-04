import ClerkSignUpModel from "../../models/SignUp/ClerkSignUpModel.js";
import jwt from "jsonwebtoken";

 const clerkSignup = async (req, res) => {
  const { name, email, password, phoneNumber, department } = req.body;
  
console.log("hi i m in ")

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
const updateClerkInfo = async (req, res) => {
  const { name, phoneNumber, email, password } = req.body;
  const adminId = req.params.id;

  try {
    const admin = await ClerkSignUpModel.findById(adminId);
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    admin.name = name || admin.name;
    admin.phoneNumber = phoneNumber || admin.phoneNumber;
    admin.email = email || admin.email;
    admin.password = password || admin.password;

    await admin.save();

    res.status(200).json({ msg: "Profile updated successfully", admin });
  } catch (error) {
    console.error("Error updating admin profile:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Function to get admin data by ID
const getClerkById = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await ClerkSignUpModel.findById(adminId).select("-password"); // Exclude password from the response
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error("Error retrieving admin data:", error);
    res.status(500).json({ msg: "Server error" });
  }
};
export { getClerkById, updateClerkInfo, clerkSignup };