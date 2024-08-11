import UpGraduationSchema from "../../models/UpGraduation/UpGraduationModel.js";
const createUpGraduation = async (req, res) => {
  try {
    const achievementsArray = req.body;
const { dept } = req.params;
    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { srno, name, designation, course } = achievement;

      let existingAchievement = await UpGraduationSchema.findOne({
        srno,
        name,
        designation,
        course,
      });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        // Create a new achievement document
        const newAchievement = new UpGraduationSchema({
          srno,
          name,
          designation,
          course,
          dept
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

const getUpGraduation = async (req, res) => {
  try {
    const achievements = await UpGraduationSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteUpGraduation = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement = await UpGraduationSchema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateUpGraduation = async (req, res) => {
  const { id } = req.params;
  const { srno, name, designation, course } = req.body;
  try {
    const updatedAchievement = await UpGraduationSchema.findByIdAndUpdate(
      id,
      {
        srno,
        name,
        designation,
        course,
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
  createUpGraduation,
  getUpGraduation,
  deleteUpGraduation,
  updateUpGraduation,
};
