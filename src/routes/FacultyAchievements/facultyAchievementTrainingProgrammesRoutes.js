import express from "express";

const router = express.Router();

import {
  createFacultyAchievementTrainingProgrammes,
  getFacultyAchievementsTrainingProgrammes,
  deleteFacultyAchievementTrainingProgrammes,
  updateFacultyAchievementTrainingProgrammes,
} from "../../controllers/FacultyAchievements/facultyAchievementTrainingProgrammesController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createFacultyAchievementTrainingProgrammes);
router.delete("/:id", deleteFacultyAchievementTrainingProgrammes);
router.get("/getdata", getFacultyAchievementsTrainingProgrammes);
router.put("/:id", updateFacultyAchievementTrainingProgrammes);

export default router;
