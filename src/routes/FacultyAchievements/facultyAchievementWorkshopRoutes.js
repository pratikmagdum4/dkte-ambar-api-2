import express from "express";

const router = express.Router();

import {
  createFacultyAchievementWorkshop,
  getFacultyAchievementsWorkshop,
  deleteFacultyAchievementWorkshop,
  updateFacultyAchievementWorkshop,
} from "../../controllers/FacultyAchievements/facultyAchievementWorkshopController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementWorkshop);
router.get("/getdata", getFacultyAchievementsWorkshop);
router.put("/:id", updateFacultyAchievementWorkshop);
router.delete("/:id", deleteFacultyAchievementWorkshop);

export default router;
