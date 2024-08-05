import {createAdminNotification,
  getAdminNotification,
  deleteAdminNotification,
  updateAdminNotification,}from "../../controllers/Notification/AdminNotificationController.js";


  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createAdminNotification);

  router.get("/getdata", getAdminNotification);

  router.delete("/:id", deleteAdminNotification);

  router.put("/:id", updateAdminNotification);

export default router;