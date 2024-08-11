import mongoose from "mongoose";

const studentAchievementAppreciationPrizeSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
  dept: { type: String, default: "" },
});

const StudentAchievementAppreciationPrizeSchema = mongoose.model(
  "StudentAchievementAppreciationPrizeSchema",
  studentAchievementAppreciationPrizeSchema
);
export default StudentAchievementAppreciationPrizeSchema;
