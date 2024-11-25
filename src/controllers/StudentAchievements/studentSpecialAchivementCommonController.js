import StudentAchievementSpecialAchievementsToeflSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsToeflModel.js";
import StudentAchievementSpecialAchievementsGateSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsGateModel.js";
import StudentAchievementSpecialAchievementsGreSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsGreModel.js";
import StudentAchievementSpecialAchievementsNiftSchema from "../../models/StudentAchievements/studentAchievementSpecialAchievementsModels/studentAchievementSpecialAchievementsNiftModel.js";

const schemas = {
  gate: StudentAchievementSpecialAchievementsGateSchema,
  nift: StudentAchievementSpecialAchievementsNiftSchema,
  toefl: StudentAchievementSpecialAchievementsToeflSchema,
  gre: StudentAchievementSpecialAchievementsGreSchema,
};

const getSchema = (examType) => {
  return schemas[examType];
};

const createStudentAchievementSpecialAchievements = async (
  req,
  res,
  examType
) => {
  try {
    const schema = getSchema(examType);
    const achievementsArray = req.body;
const { dept } = req.params;
console.log("dept is ",dept)
    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { _id, srno, name, Class } = achievement;
      console.log("class is ",Class)
      if (_id) {
        // Update existing achievement if _id is provided
        let updatedAchievement = await schema.findByIdAndUpdate(
          _id,
          { srno, name, Class,dept },
          { new: true }
        );
        savedAchievements.push(updatedAchievement);
      } else {
        // Create a new achievement if _id is not provided
        console.log("i mhere ")
        const newAchievement = new schema({ srno, name, Class,dept });
        const savedAchievement = await newAchievement.save();
        savedAchievements.push(savedAchievement);
      }
    }

    res.status(200).send(savedAchievements);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
};

const getStudentAchievementsSpecialAchievements = async (
  req,
  res,
  examType
) => {
  try {
    const schema = getSchema(examType);
    const achievements = await schema.find();
    res.status(200).send(achievements);
  } catch (error) {
    console.log("The error is ", error);
    res.status(400).send(error);
  }
};

const deleteStudentAchievementSpecialAchievements = async (
  req,
  res,
  examType
) => {
  const { id } = req.params;
  try {
    const schema = getSchema(examType);
    const achievement = await schema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateStudentAchievementSpecialAchievements = async (
  req,
  res,
  examType
) => {
  const { id } = req.params;
  const { srno, name, Class } = req.body;
        console.log("class is ", Class);

  try {
    const schema = getSchema(examType);
    const updatedAchievement = await schema.findByIdAndUpdate(
      id,
      { srno, name, Class },
      { new: true }
    );
    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({
      message: "Achievement updated successfully",
      updatedAchievement,
    });
  } catch (error) {
    res.status(500).json({ message: "Error updating achievement" });
  }
};

export {
  createStudentAchievementSpecialAchievements,
  getStudentAchievementsSpecialAchievements,
  updateStudentAchievementSpecialAchievements,
  deleteStudentAchievementSpecialAchievements,
};
