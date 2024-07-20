import mongoose from "mongoose";

const facultyAchievementPaperPublicationSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const FacultyAchievementPaperPublicationSchema = mongoose.model(
  "FacultyAchievementPaperPublication",
  facultyAchievementPaperPublicationSchema
);
export default FacultyAchievementPaperPublicationSchema;
