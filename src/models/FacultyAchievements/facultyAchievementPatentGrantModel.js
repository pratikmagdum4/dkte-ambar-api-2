import mongoose, { mongo } from "mongoose";

const facultyAchievementPatentGrantSchema = new mongoose.Schema({
    name:{type:String,default:""},
    title:{type:String,default:""},
    patentno:{type:String,default:""},
    grantdate:{type:String,default:""}
})

const FacultyAchievementPatentGrantSchema = mongoose.model(
    "FacultyAchievementPatentGrantSchema",
    facultyAchievementPatentGrantSchema
)

export default FacultyAchievementPatentGrantSchema;