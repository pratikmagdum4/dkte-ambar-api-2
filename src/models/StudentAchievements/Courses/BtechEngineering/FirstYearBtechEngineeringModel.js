import mongoose from "mongoose";

// Schema for a student entry
const studentSchema = new mongoose.Schema({
  rank: { type: Number, required: true },
  name: { type: String, default: "" },
  cgpa: { type: String, default: "" },
});

// Schema for a department containing an array of student entries
const departmentSchema = new mongoose.Schema({
  departmentName: { type: String, required: true },
  students: [studentSchema],
});

// Main schema for storing all departments' data
const firstYearBtechEngineeringSchema = new mongoose.Schema({
  departments: [departmentSchema],
});

const FirstYearBtechEngineeringModel = mongoose.model(
  "FirstYearBtechEngineeringModel",
  firstYearBtechEngineeringSchema
);

export default FirstYearBtechEngineeringModel;
