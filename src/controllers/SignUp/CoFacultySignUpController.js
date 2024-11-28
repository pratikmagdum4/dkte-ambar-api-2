import FacultySignUpModel from "../../models/SignUp/CoFacultySignUpModel.js";

import jwt from "jsonwebtoken"

const facultySignup = async (req,res) =>{
    const {name,email,password,phoneNumber,department} = req.body;
    try{
        const existingFaculty = await FacultySignUpModel.findOne({email});
        if(existingFaculty)
        {
            return res.status(400).json({msg:"User already exists"});
        }
        const newFaculty = new FacultySignUpModel({
            name,email,password,phoneNumber,department
        })
        await newFaculty.save();
        const token = jwt.sign(
            {id:newFaculty._id,role:"faculty"},
            process.env.JWT_SECRET,
            {
                expiresIn:"1h",
            }
        )
        res.status(201)
        .json({id:newFaculty._id,name:newFaculty.name,role:"faculty",token});
    }catch(error)
    {
        console.error("Error during faculty signup",error)
        res.status(500).json({msg:"Server error"})
    }
}

const updateFacultyInfo = async (req,res) =>{
    const {name,phoneNumber,email,password} = req.body;
    const facultyId = req.params.id;
    try{
        const faculty = await FacultySignUpModel.findById(facultyId);
        if(!faculty)
        {
            return res.status(404).json({msg:"Faculty not found"});
        }
        faculty.name - name|| faculty.name;
        faculty.phoneNumber = phoneNumber || faculty.phoneNumber;
        faculty.email = email|| faculty.email;
        faculty.password = password || faculty.password;

        await faculty.save();
        res.status(200).json({msg:"Profile updated successfully",faculty})
    }
    catch(err)
    {
        console.error("Error updating faculty profile");
        res.status(500).json({msg:"Server error"})
    }
}

const getFacultyById = async (req,res) =>{
    const facultyId = req.params.id;
    console.log(facultyId);
    if (facultyId) {
      try {
        const faculty = await FacultySignUpModel.findById(facultyId).select(
          "-password"
        ); // Exclude password from the response
        if (!faculty) {
          return res.status(404).json({ msg: "faculty not found" });
        }

        res.status(200).json(faculty);
      } catch (error) {
        console.error("Error retrieving admin data:", error);
        res.status(500).json({ msg: "Server error" });
      }
    } else {
      res.status(400).json({ msg: "Invalid faculty ID" });
    }
}

export { facultySignup, getFacultyById, updateFacultyInfo };