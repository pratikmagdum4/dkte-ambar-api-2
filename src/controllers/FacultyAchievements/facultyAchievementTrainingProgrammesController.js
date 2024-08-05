import FacultyAchievementTrainingProgrammesSchema from "../../models/FacultyAchievements/facultyAchievementTrainingProgrammesModel.js";

const createFacultyAchievementTrainingProgrammes = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];

    for (const achievement of achievementArray) {
      const {_id, name, training } = achievement;

      if (_id) {
        let existingAchievement =
          await FacultyAchievementTrainingProgrammesSchema.findByIdAndUpdate(
            _id,
            { name, training },
            { new: true }
          );

        savedAchievements.push(existingAchievement);
      } else {
        const newAchievement = new FacultyAchievementTrainingProgrammesSchema({
          name,
          training,
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

const getFacultyAchievementsTrainingProgrammes = async (req, res) => {
  try {
    const achievements =
      await FacultyAchievementTrainingProgrammesSchema.find();
    res.status(200).send(achievements);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementTrainingProgrammes = async (req, res) => {
  const { id } = req.params;

  try {
    const achievement =
      await FacultyAchievementTrainingProgrammesSchema.findByIdAndDelete(id);

    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }

    res.status(200).send(achievement);
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateFacultyAchievementTrainingProgrammes = async (req, res) => {
  const { id } = req.params;
  const { name, training } = req.body;

  try {
    const updatedAchievement =
      await FacultyAchievementTrainingProgrammesSchema.findByIdAndUpdate(
        id,
        {
          name,
          training,
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
  createFacultyAchievementTrainingProgrammes,
  getFacultyAchievementsTrainingProgrammes,
  deleteFacultyAchievementTrainingProgrammes,
  updateFacultyAchievementTrainingProgrammes,
};
