import mongoose from "mongoose";

const facultyAchievementBookPublicationSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  title: { type: String, default: "" },
  agency: { type: String, default: "" },
  isbnno: { type: String, default: "" },
  chapter: { type: String, default: "" },
});

const FacultyAchievementBookPublicationSchema = mongoose.model(
  "FacultyAchievementBookPublicationSchema",
  facultyAchievementBookPublicationSchema
);
export default FacultyAchievementBookPublicationSchema;
