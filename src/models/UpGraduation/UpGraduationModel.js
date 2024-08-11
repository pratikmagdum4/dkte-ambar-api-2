import mongoose from "mongoose";

const upGraduationSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  name: { type: String, default: "" },
  designation: { type: String, default: "" },
  course: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const UpGraduationSchema = mongoose.model(
  "UpGraduationSchema",
  upGraduationSchema
);
export default UpGraduationSchema;
