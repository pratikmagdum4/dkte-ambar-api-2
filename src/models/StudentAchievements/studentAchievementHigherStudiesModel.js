import mongoose from "mongoose";

const studentAchievementHigherStudiesSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StudentAchievementHigherStudiesSchema = mongoose.model(
  "StudentAchievementHigherStudiesSchema",
  studentAchievementHigherStudiesSchema
);
export default StudentAchievementHigherStudiesSchema;

