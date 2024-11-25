import mongoose from "mongoose";

const adminNotificationSchema = new mongoose.Schema({
  note: { type: String, default: "" },
  deadline: { type: String, default: "" },
  dept: { type: String, default: "" },
  date: { type: String, default: "" },
  time: { type: String, default: "" },
});

const AdminNotificationModel = mongoose.model(
  "AdminNotificationModel",
  adminNotificationSchema
);
export default AdminNotificationModel;
