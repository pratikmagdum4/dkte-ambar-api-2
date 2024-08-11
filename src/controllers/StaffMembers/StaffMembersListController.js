import StaffMembersListModel from "../../models/StaffMembers/StaffMembersListModel.js";
const createStaffMembersList = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
const { dept } = req.params;
    for (const achievement of achievementArray) {
      const { _id, name, position } = achievement;
      let existingAchievement;

      if (_id) {
        existingAchievement = await StaffMembersListModel.findByIdAndUpdate(
          _id,
          { name, position },
          { new: true }
        );
        savedAchievements.push(existingAchievement);
      } else {
        // Create new achievement
        const newAchievement = new StaffMembersListModel({
          name,
          position,
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

const getStaffMembersList = async (req, res) => {
  try {
    const achievement = await StaffMembersListModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteStaffMembersList = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await StaffMembersListModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateStaffMembersList = async (req, res) => {
  const { id } = req.params;
  const { name, position } = req.body;

  try {
    const updatedAchievement = await StaffMembersListModel.findByIdAndUpdate(
      id,
      { name, position },
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
  createStaffMembersList,
  getStaffMembersList,
  deleteStaffMembersList,
  updateStaffMembersList,
};
