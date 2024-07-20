import FacultyAchievementOtherSpecial from "../../models/FacultyAchievements/facultyAchievementOtherSpecialModel.js";

const createFacultyAchievementOtherSpecial = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementArray) {
      const { srno, info } = achievement;

      let existingAchievement = await FacultyAchievementOtherSpecial.findOne({
        srno,
        info,
      });
      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new FacultyAchievementOtherSpecial({
          srno,
          info,
        });

        const savedAchievement = await newAchievement.save();
        savedAchievements.push(savedAchievement);
      }
    }

    res.status(200).send(savedAchievements);
  } catch (error) {
    console.error("Error saving achievement", error);
    res.status(400).send(error);
  }
};

const getFacultyAchievementsOtherSpecial = async (req, res) => {
  try {
    const achievements = await FacultyAchievementOtherSpecial.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementOtherSpecial = async (req, res) => {
  const { id } = req.params;

  try {
    const achievement = await FacultyAchievementOtherSpecial.findByIdAndDelete(
      id
    );

    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).send(achievement);
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateFacultyAchievementOtherSpecial = async (req, res) => {
  const { id } = req.params;
  const { srno, info } = req.body;

  try {
    const updatedAchievement =
      await FacultyAchievementOtherSpecial.findByIdAndUpdate(
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
    res.status(500).json({ message: "Error updating" });
  }
};

export {
  createFacultyAchievementOtherSpecial,
  getFacultyAchievementsOtherSpecial,
  deleteFacultyAchievementOtherSpecial,
  updateFacultyAchievementOtherSpecial,
};
