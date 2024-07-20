import express from "express";
const router = express.Router();

import {
  createFacultyAchievementPaperPublication,
  deleteFacultyAchievementPaperPublication,
  getFacultyAchievementsPaperPublication,
  updateFacultyAchievementPaperPublication,
} from "../../controllers/FacultyAchievements/facultyAchievementPaperPublicationController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementPaperPublication);

router.get("/getdata", getFacultyAchievementsPaperPublication);
router.delete("/:id", deleteFacultyAchievementPaperPublication);
router.put("/:id", updateFacultyAchievementPaperPublication);

export default router;
