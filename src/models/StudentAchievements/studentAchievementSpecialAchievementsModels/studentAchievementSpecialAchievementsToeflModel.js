import mongoose from "mongoose";

const studentAchievementSpecialAchievementsToeflSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  name: { type: String, default: "" },
  Class: { type: String, default: "" },
});

const StudentAchievementSpecialAchievementsToeflSchema = mongoose.model(
  "StudentAchievementSpecialAchievementsToefl",
  studentAchievementSpecialAchievementsToeflSchema
);
export default StudentAchievementSpecialAchievementsToeflSchema;
