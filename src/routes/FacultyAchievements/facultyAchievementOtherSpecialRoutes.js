import express from "express";

const router = express.Router();

import {
  createFacultyAchievementOtherSpecial,
  deleteFacultyAchievementOtherSpecial,
  getFacultyAchievementsOtherSpecial,
  updateFacultyAchievementOtherSpecial,
} from "../../controllers/FacultyAchievements/facultyAchievementOtherSpecialController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createFacultyAchievementOtherSpecial);
router.delete("/:id", deleteFacultyAchievementOtherSpecial);
router.get("/getdata", getFacultyAchievementsOtherSpecial);
router.put("/:id", updateFacultyAchievementOtherSpecial);

export default router;
