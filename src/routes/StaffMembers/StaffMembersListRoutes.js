import {  createStaffMembersList,
  getStaffMembersList,
  deleteStaffMembersList,
  updateStaffMembersList,}from "../../controllers/StaffMembers/StaffMembersListController.js";



import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createStaffMembersList);

router.get("/getdata", getStaffMembersList);

router.put("/:id", deleteStaffMembersList);

router.delete("/:id", updateStaffMembersList);

export default router;