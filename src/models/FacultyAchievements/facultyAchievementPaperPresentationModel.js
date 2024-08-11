import mongoose from "mongoose";

const facultyAchievementPaperPresentationSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const FacultyAchievementPaperPresentationSchema = mongoose.model("FacultyAchievementPaperPresentation",facultyAchievementPaperPresentationSchema);

export default FacultyAchievementPaperPresentationSchema;