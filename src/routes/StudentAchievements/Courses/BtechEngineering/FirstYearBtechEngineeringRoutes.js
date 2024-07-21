import express from "express";
import {
  saveFirstYearBtechEngineeringData,
  getFirstYearBtechEngineeringData,
} from "../../../../controllers/StudentAchievements/Courses/Btech Engineering/First Year/FirstYearBtechEngineeringCommonController.js";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.get("/get", getFirstYearBtechEngineeringData);
router.post("/submit", saveFirstYearBtechEngineeringData);

export default router;
