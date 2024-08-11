import { handleStudentAchievementSpecialAchievements } from "../../controllers/StudentAchievements/studentAchievementSpecialAchievementsController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:examType/:dept", (req, res) =>
  handleStudentAchievementSpecialAchievements(req, res, "create")
);
router.get("/getdata/:examType", (req, res) =>
  handleStudentAchievementSpecialAchievements(req, res, "get")
);
router.put("/:examType/:id", (req, res) =>
  handleStudentAchievementSpecialAchievements(req, res, "update")
);
router.delete("/:examType/:id", (req, res) =>
  handleStudentAchievementSpecialAchievements(req, res, "delete")
);

export default router;
