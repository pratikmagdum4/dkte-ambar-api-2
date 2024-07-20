import express from "express";
const router = express.Router();
import {
  createStudentAchievementAppreciationPrize,
  getStudentAchievementAppreciationPrize,
  updateStudentAchievementAppreciationPrize,
  deleteStudentAchievementAppreciationPrize,
} from "../../controllers/StudentAchievements/studentAchievementAppreciationPrizeController.js";

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createStudentAchievementAppreciationPrize);
router.get("/getdata", getStudentAchievementAppreciationPrize);
router.put("/:id", updateStudentAchievementAppreciationPrize);
router.delete("/:id", deleteStudentAchievementAppreciationPrize);

export default router;
