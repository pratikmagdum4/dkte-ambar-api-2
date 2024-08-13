import AdminSignUpModel from "../../models/SignUp/AdminSignUpModel.js";
import jwt from "jsonwebtoken";

// Existing adminSignup function
const adminSignup = async (req, res) => {
  const { name, email, password, phoneNumber, department } = req.body;

  try {
    const existingClerk = await AdminSignUpModel.findOne({ email });
    if (existingClerk) {
      return res.status(400).json({ msg: "User already exists" });
    }

    const newAdmin = new AdminSignUpModel({
      name,
      email,
      password,
      phoneNumber,
      department,
    });

    await newAdmin.save();

    const token = jwt.sign(
      { id: newAdmin._id, role: "admin" },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res
      .status(201)
      .json({ id: newAdmin._id, name: newAdmin.name, role: "admin", token });
  } catch (error) {
    console.error("Error during clerk signup:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

// Function to update admin info
const updateAdminInfo = async (req, res) => {
  const { name, phoneNumber, email, password, } =
    req.body;
  const adminId = req.params.id;

  try {
    const admin = await AdminSignUpModel.findById(adminId);
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
const getAdminById = async (req, res) => {
  const adminId = req.params.id;

  try {
    const admin = await AdminSignUpModel.findById(adminId).select("-password"); // Exclude password from the response
    if (!admin) {
      return res.status(404).json({ msg: "Admin not found" });
    }

    res.status(200).json(admin);
  } catch (error) {
    console.error("Error retrieving admin data:", error);
    res.status(500).json({ msg: "Server error" });
  }
};

export { adminSignup, updateAdminInfo, getAdminById };
