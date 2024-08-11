import mongoose from "mongoose";

const facultyAchievementTrainingProgrammesSchema = new mongoose.Schema({
  name: { type: String, default: "" },
  training: { type: String, default: "" },
  dept: { type: String, default: "" },
});
const FacultyAchievementTrainingProgrammesSchema = mongoose.model(
    "facultyAchievementTrainingProgrammes",
    facultyAchievementTrainingProgrammesSchema
)

export default FacultyAchievementTrainingProgrammesSchema;