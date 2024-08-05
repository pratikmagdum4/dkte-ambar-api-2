
import StudentAchievementPaperProjectSchema from "../../models/StudentAchievements/studentAchievementPaperProjectModel.js";
const createStudentAchievementPaperProject = async (req, res) => {
  try {
    console.log("hi i m in controller");
    const achievementsArray = req.body;

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const {_id, name, event, prize } = achievement;

      if (_id) {
        let existingAchievement =
          await StudentAchievementPaperProjectSchema.findByIdAndUpdate(
            _id,
            { name, event, prize },
            { new: true }
          );
  
        savedAchievements.push(existingAchievement);
      } else {
        
        const newAchievement = new StudentAchievementPaperProjectSchema({
          name,
          event,
          prize,
        });
        // Save the new achievement
        const savedAchievement = await newAchievement.save();
        savedAchievements.push(savedAchievement);
      }
    }
    // Send response
    res.status(200).send(savedAchievements);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
};

const getStudentAchievementsPaperProject = async (req, res) => {
  try {
    const achievements = await StudentAchievementPaperProjectSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteStudentAchievementPaperProject = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement =
      await StudentAchievementPaperProjectSchema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateStudentAchievementPaperProject = async (req, res) => {
  const { id } = req.params;
  const { name, event, prize } = req.body;
  try {
    const updatedAchievement =
      await StudentAchievementPaperProjectSchema.findByIdAndUpdate(
        id,
        {
          name,
          event,
          prize,
        },
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
  createStudentAchievementPaperProject,
  getStudentAchievementsPaperProject,
  deleteStudentAchievementPaperProject,
  updateStudentAchievementPaperProject,
};
