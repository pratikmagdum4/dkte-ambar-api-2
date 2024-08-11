import mongoose from "mongoose";

const facultyAchievementWorkshopSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  workshopname: { type: String, default: "" },
  dept: { type: String, default: "" },
});
const FacultyAchievementWorkshopSchema = mongoose.model(
  "facultyAchievementWorkshop",
  facultyAchievementWorkshopSchema
);

export default FacultyAchievementWorkshopSchema;

