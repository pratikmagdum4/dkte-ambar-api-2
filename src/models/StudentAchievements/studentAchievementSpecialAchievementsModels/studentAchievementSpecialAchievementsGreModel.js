import mongoose from "mongoose";

const studentAchievementSpecialAchievementsGreSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  name: { type: String, default: "" },
  Class: { type: String, default: "" },
});

const StudentAchievementSpecialAchievementsGreSchema = mongoose.model(
  "StudentAchievementSpecialAchievementsGre",
  studentAchievementSpecialAchievementsGreSchema
);
export default StudentAchievementSpecialAchievementsGreSchema;
