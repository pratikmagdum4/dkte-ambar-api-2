import {
  createStudentAchievementPaperProject,
  getStudentAchievementsPaperProject,
  deleteStudentAchievementPaperProject,
  updateStudentAchievementPaperProject,
} from "../../controllers/StudentAchievements/studentAchievementPaperProjectController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createStudentAchievementPaperProject);
router.get("/getdata", getStudentAchievementsPaperProject);
router.put("/:id", updateStudentAchievementPaperProject);
router.delete("/:id", deleteStudentAchievementPaperProject);

export default router;
