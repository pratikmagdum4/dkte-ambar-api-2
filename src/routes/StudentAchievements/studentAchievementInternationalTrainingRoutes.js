import express from "express";
import {
  createStudentAchievementInternationalTraining,
  getStudentAchievementInternationalTraining,
  deleteStudentAchievementInternationalTraining,
  updateStudentAchievementInternationalTraining,
} from "../../controllers/StudentAchievements/studentAchievementInternationalTrainingController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createStudentAchievementInternationalTraining);
router.get("/getdata", getStudentAchievementInternationalTraining);
router.put("/:id", updateStudentAchievementInternationalTraining);
router.delete("/:id", deleteStudentAchievementInternationalTraining);

export default router;
