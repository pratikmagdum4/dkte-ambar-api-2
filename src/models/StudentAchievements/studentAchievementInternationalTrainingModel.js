import mongoose from "mongoose";

const studentAchievementInternationalTrainingSchema = new mongoose.Schema({
  srno: { type: String, default: "" },
  info: { type: String, default: "" },
});

const StudentAchievementInternationalTrainingSchema = mongoose.model(
  "StudentAchievementInternationalTrainingSchema",
  studentAchievementInternationalTrainingSchema
);
export default StudentAchievementInternationalTrainingSchema;
