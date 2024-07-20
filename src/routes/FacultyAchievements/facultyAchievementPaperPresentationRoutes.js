import express from "express";

const router = express.Router();

import {
  createFacultyAchievementPaperPresentation,
  deleteFacultyAchievementPaperPresentation,
  getFacultyAchievementsPaperPresentation,
  updateFacultyAchievementPaperPresentation,
} from "../../controllers/FacultyAchievements/facultyAchievementPaperPresentationController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementPaperPresentation);
router.delete("/:id", deleteFacultyAchievementPaperPresentation);
router.get("/getdata", getFacultyAchievementsPaperPresentation);
router.put("/:id", updateFacultyAchievementPaperPresentation);

export default router;
