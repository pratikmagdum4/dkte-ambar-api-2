import {createStaffMembersCount,
  getStaffMembersCount,
  deleteStaffMembersCount,
  updateStaffMembersCount}from "../../controllers/StaffMembers/StaffMembersCountController.js";

  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createStaffMembersCount);
  router.get("/getdata", getStaffMembersCount);
  router.delete("/:id", deleteStaffMembersCount);
  router.put("/:id", updateStaffMembersCount);

  export default router;

