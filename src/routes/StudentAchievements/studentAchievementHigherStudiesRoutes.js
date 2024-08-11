import express from 'express';
import {
  createStudentAchievementHigherStudies,
  getStudentAchievementHigherStudies,
  deleteStudentAchievementHigherStudies,
  updateStudentAchievementHigherStudies,
} from "../../controllers/StudentAchievements/studentAchievementHigherStudiesController.js";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post("/submit/:dept", createStudentAchievementHigherStudies);
router.get('/getdata',getStudentAchievementHigherStudies);
router.put("/:id",updateStudentAchievementHigherStudies);
router.delete("/:id",deleteStudentAchievementHigherStudies);

export default router;