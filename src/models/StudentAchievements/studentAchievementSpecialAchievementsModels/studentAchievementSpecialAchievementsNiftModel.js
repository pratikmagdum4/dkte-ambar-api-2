import mongoose from "mongoose";

const studentAchievementSpecialAchievementsNiftSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  name: { type: String, default: "" },
  Class: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StudentAchievementSpecialAchievementsNiftSchema = mongoose.model(
  "StudentAchievementSpecialAchievementsNift",
  studentAchievementSpecialAchievementsNiftSchema
);
export default StudentAchievementSpecialAchievementsNiftSchema;
