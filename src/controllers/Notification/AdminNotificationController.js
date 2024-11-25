import AdminNotificationModel from "../../models/Notification/AdminNotificationModel.js";



const createAdminNotification = async (req, res) => {
  try {
    const NotificationArray = req.body;
    // const dept = req.body.department;
    const savedNotifications = [];
   console.log("")
      const { _id, note, deadline, date,time,dept } = NotificationArray;
      if (_id) {
        let existingNotification =
          await AdminNotificationModel.findByIdAndUpdate(
            _id,
            { note, deadline,dept ,date,time},
            { new: true }
          );
        savedNotifications.push(existingNotification);
      } else {
        // Create a new achievement document
        const newNotification = new AdminNotificationModel({
          note,
          deadline,
          dept,
          date,
          time,
        });
        // Save the new achievement
        const savedNotification = await newNotification.save();
        savedNotifications.push(savedNotification);
      }
    // Send response
    res.status(200).send(savedNotifications);
  } catch (error) {
    console.error("Error saving achievement:", error);
    res.status(400).send(error);
  }
};

const getAdminNotificationByDept = async (req, res) => {
  try {
    const department = req.params.dept;
    console.log("The dept is ",department)
    const achievements = await AdminNotificationModel.find({dept:department});
    res.status(200).send(achievements);
  } catch (error) {
    console.log("having error ");
    res.status(400).send(error);
  }
};
const getAllAdminNotification = async (req, res) => {
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
  getAdminNotificationByDept,
  deleteAdminNotification,
  updateAdminNotification,
  getAllAdminNotification,
};
