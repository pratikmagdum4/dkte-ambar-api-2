import {  createStaffMembersCateCount,
  getStaffMembersCateCount,
  deleteStaffMembersCateCount,
  updateStaffMembersCateCount,}from "../../controllers/StaffMembers/StaffMembersCateCountController.js";


  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createStaffMembersCateCount);
  router.get("/getdata", getStaffMembersCateCount);
  router.delete(":id", deleteStaffMembersCateCount);
  router.put(":id", updateStaffMembersCateCount);

  export default router;

