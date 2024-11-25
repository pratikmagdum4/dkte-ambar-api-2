import {
  createAdminNotification,
  getAllAdminNotification,
  deleteAdminNotification,
  updateAdminNotification,
  getAdminNotificationByDept,
} from "../../controllers/Notification/AdminNotificationController.js";


  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createAdminNotification);

  router.get("/:dept/getdata", getAdminNotificationByDept);
  router.get("/getdata", getAllAdminNotification);

  router.delete("/:id", deleteAdminNotification);

  router.put("/:id", updateAdminNotification);

export default router;
