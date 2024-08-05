import FacultyAchievementPatentGrantSchema from "../../models/FacultyAchievements/facultyAchievementPatentGrantModel.js";

const createFacultyAchievementPatentGrant = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
    for (const achievement of achievementArray) {
      const {_id, name, title, patentno, grantdate } = achievement;
      if (_id) {
        let existingAchievement =
          await FacultyAchievementPatentGrantSchema.findByIdAndUpdate(
            _id,
            { name, title, patentno, grantdate },
            { new: true }
          );

        savedAchievements.push(existingAchievement);
      } else {
        //create new
        const newAchievement = new FacultyAchievementPatentGrantSchema({
          name,
          title,
          patentno,
          grantdate,
        });
        //save
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

const getFacultyAchievementsPatentGrant = async (req, res) => {
  try {
    const achievement = await FacultyAchievementPatentGrantSchema.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteFacultyAchievementPatentGrant = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement =
      await FacultyAchievementPatentGrantSchema.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error Deleting achievement" });
  }
};

const updateFacultyAchievementPatentGrant = async (req, res) => {
  const { id } = req.params;
  const { name, title, patentno, grantdate } = req.body;

  try {
    const updatedAchievement =
      await FacultyAchievementPatentGrantSchema.findByIdAndUpdate(
        id,
        {
          name,
          title,
          patentno,
          grantdate,
        },
        { new: true }
      );
    if (!updatedAchievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({
      message: "Achievement updated successfully",
      updatedAchievement: updatedAchievement,
    });
  } catch (error) {
    res.status(500).json({ message: "Error Updating achievement" });
  }
};

export {
  createFacultyAchievementPatentGrant,
  getFacultyAchievementsPatentGrant,
  deleteFacultyAchievementPatentGrant,
  updateFacultyAchievementPatentGrant,
};
