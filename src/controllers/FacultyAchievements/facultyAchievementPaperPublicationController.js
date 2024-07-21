import FacultyAchievementPaperPublicationSchema from "../../models/FacultyAchievements/facultyAchievementPaperPublicationModel.js";

const createFacultyAchievementPaperPublication = async (req, res) => {
  try {
    const achievementsArray = req.body;

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { srno, info } = achievement;

      let existingAchievement =
        await FacultyAchievementPaperPublicationSchema.findOne({
          srno,
          info,
        });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        // Create a new achievement document
        const newAchievement = new FacultyAchievementPaperPublicationSchema({
          srno,
          info,
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

const getFacultyAchievementsPaperPublication = async (req, res) => {
  try {
    const achievements = await FacultyAchievementPaperPublicationSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    console.log("having error ");
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementPaperPublication = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement =
      await FacultyAchievementPaperPublicationSchema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    console.log("hi i here in delete error is ", error);
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateFacultyAchievementPaperPublication = async (req, res) => {
  const { id } = req.params;
  const { srno, info } = req.body;
  try {
    const updatedAchievement =
      await FacultyAchievementPaperPublicationSchema.findByIdAndUpdate(
        id,
        {
          srno,
          info,
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
  createFacultyAchievementPaperPublication,
  getFacultyAchievementsPaperPublication,
  deleteFacultyAchievementPaperPublication,
  updateFacultyAchievementPaperPublication,
};
