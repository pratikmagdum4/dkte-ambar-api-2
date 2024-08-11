import StaffMembersCountModel from "../../models/StaffMembers/StaffMembersCountModel.js";
const createStaffMembersCount = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
const { dept } = req.params;
    for (const achievement of achievementArray) {
      const { _id, namecat, positioncount } = achievement;
      let existingAchievement;

      if (_id) {
        existingAchievement = await StaffMembersCountModel.findByIdAndUpdate(
          _id,
          { namecat, positioncount },
          { new: true }
        );
        savedAchievements.push(existingAchievement);
      } else {
        // Create new achievement
        const newAchievement = new StaffMembersCountModel({
          namecat,
          positioncount,
          dept
        });
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

const getStaffMembersCount = async (req, res) => {
  try {
    const achievement = await StaffMembersCountModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteStaffMembersCount = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await StaffMembersCountModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateStaffMembersCount = async (req, res) => {
  const { id } = req.params;
  const { namecat, positioncount } = req.body;

  try {
    const updatedAchievement = await StaffMembersCountModel.findByIdAndUpdate(
      id,
      { namecat, positioncount },
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
  createStaffMembersCount,
  getStaffMembersCount,
  deleteStaffMembersCount,
  updateStaffMembersCount,
};
