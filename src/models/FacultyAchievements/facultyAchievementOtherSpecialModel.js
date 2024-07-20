import mongoose from "mongoose"

const facultyAchievementOtherSpecialSchema = new mongoose.Schema({
    srno:{type:String,default:""},
    info:{type:String,default:""},
}) ;

const FacultyAchievementOtherSpecialSchema = mongoose.model(
    "FacultyAchievementOtherSpecial",
    facultyAchievementOtherSpecialSchema
)
export default FacultyAchievementOtherSpecialSchema;