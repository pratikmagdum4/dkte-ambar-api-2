import mongoose from "mongoose";

const adminNotificationSchema = new mongoose.Schema({
  note: { type: String, default: "" },
  deadline: { type: String, default: "" },
});

const AdminNotificationModel = mongoose.model(
  "AdminNotificationModel",
  adminNotificationSchema
);
export default AdminNotificationModel;
