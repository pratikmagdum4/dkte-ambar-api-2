import StaffMembersCateCountModel from "../../models/StaffMembers/StaffMembersCateCountModel.js";


const createStaffMembersCateCount = async (req, res) => {
  try {
    const achievementArray = req.body;
    const savedAchievements = [];
const { dept } = req.params;
    for (const achievement of achievementArray) {
      const { _id, ugpgmba, count } = achievement;
      let existingAchievement;

      if (_id) {
        existingAchievement =
          await StaffMembersCateCountModel.findByIdAndUpdate(
            _id,
            { ugpgmba, count },
            { new: true }
          );
        savedAchievements.push(existingAchievement);
      } else {
        // Create new achievement
        const newAchievement = new StaffMembersCateCountModel({
          ugpgmba,
          count,
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

const getStaffMembersCateCount = async (req, res) => {
  try {
    const achievement = await StaffMembersCateCountModel.find();
    res.status(200).send(achievement);
  } catch (error) {
    res.status(400).send(error);
  }
};

const deleteStaffMembersCateCount = async (req, res) => {
  const { id } = req.params;
  try {
    const achievement = await StaffMembersCateCountModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateStaffMembersCateCount = async (req, res) => {
  const { id } = req.params;
  const { ugpgmba, count } = req.body;

  try {
    const updatedAchievement =
      await StaffMembersCateCountModel.findByIdAndUpdate(
        id,
        { ugpgmba, count },
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
  createStaffMembersCateCount,
  getStaffMembersCateCount,
  deleteStaffMembersCateCount,
  updateStaffMembersCateCount,
};
