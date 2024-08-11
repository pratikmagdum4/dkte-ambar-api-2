import mongoose from "mongoose";

const studentAchievementSpecialAchievementsGateSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  name: { type: String, default: "" },
  Class: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StudentAchievementSpecialAchievementsGateSchema = mongoose.model(
  "StudentAchievementSpecialAchievementsGate",
  studentAchievementSpecialAchievementsGateSchema
);
export default StudentAchievementSpecialAchievementsGateSchema;
