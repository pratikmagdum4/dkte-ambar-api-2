import AdminNotificationModel from "../../models/Notification/AdminNotificationModel.js";
const createAdminNotification = async (req, res) => {
  try {
    const achievementsArray = req.body;

    const savedAchievements = [];
    for (const achievement of achievementsArray) {
      const { _id, note, deadline } = achievement;
      if (_id) {
        let existingAchievement =
          await AdminNotificationModel.findByIdAndUpdate(
            _id,
            { note, deadline },
            { new: true }
          );
        savedAchievements.push(existingAchievement);
      } else {
        // Create a new achievement document
        const newAchievement = new AdminNotificationModel({
          note,
          deadline,
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

const getAdminNotification = async (req, res) => {
  try {
    const achievements = await AdminNotificationModel.find();
    res.status(200).send(achievements);
  } catch (error) {
    console.log("having error ");
    res.status(400).send(error);
  }
};

const deleteAdminNotification = async (req, res) => {
  const { id } = req.params;
  console.log("hi i here in delete ");
  try {
    const achievement = await AdminNotificationModel.findByIdAndDelete(id);
    if (!achievement) {
      return res.status(404).json({ message: "Achievement not found" });
    }
    res.status(200).json({ message: "Achievement deleted successfully" });
  } catch (error) {
    console.log("hi i here in delete error is ", error);
    res.status(500).json({ message: "Error deleting achievement" });
  }
};

const updateAdminNotification = async (req, res) => {
  const { id } = req.params;
  const { note, deadline } = req.body;
  try {
    const updatedAchievement = await AdminNotificationModel.findByIdAndUpdate(
      id,
      {
        note,
        deadline,
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
  createAdminNotification,
  getAdminNotification,
  deleteAdminNotification,
  updateAdminNotification,
};
