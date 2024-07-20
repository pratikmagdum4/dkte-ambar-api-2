import FacultyAchievementWorkshopSchema from "../../models/FacultyAchievements/facultyAchievementWorkshopModel.js";

const createFacultyAchievementWorkshop = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementArray) {
      const { name, workshopname } = achievement;

      let existingAchievement = await FacultyAchievementWorkshopSchema.findOne({
        name,
        workshopname,
      });

      if (existingAchievement) {
        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new FacultyAchievementWorkshopSchema({
          name,
          workshopname,
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

const getFacultyAchievementsWorkshop = async (req, res) => {
  try {
    const achievements = await FacultyAchievementWorkshopSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementWorkshop = async (req, res) => {
  const { id } = req.params;

  try {
    const achievement =
      await FacultyAchievementWorkshopSchema.findByIdAndDelete(id);

    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).send(achievement);
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateFacultyAchievementWorkshop = async (req, res) => {
  const { id } = req.params;
  const { name, workshopname } = req.body;

  try {
    const updatedAchievement =
      await FacultyAchievementWorkshopSchema.findByIdAndUpdate(
        id,
        {
          name,
          workshopname,
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
  createFacultyAchievementWorkshop,
  getFacultyAchievementsWorkshop,
  deleteFacultyAchievementWorkshop,
  updateFacultyAchievementWorkshop,
};
