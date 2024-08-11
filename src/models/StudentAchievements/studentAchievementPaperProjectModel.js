import mongoose from "mongoose";

const studentAchievementPaperProjectSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  event: { type: String, default: "" },
  prize: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StudentAchievementPaperProjectSchema = mongoose.model(
  "StudentAchievementPaperProjectSchema",
  studentAchievementPaperProjectSchema
);
export default StudentAchievementPaperProjectSchema;
