import express from "express";

import {
  getFirstYearBtechEngineeringData,
  saveFirstYearBtechEngineeringData,
} from "../../../../controllers/StudentAchievements/Courses/Btech Engineering/First Year/FirstYearBtechEngineeringCommonController.js";

const router = express.Router();

console.log("hi")
router.post("/save", saveFirstYearBtechEngineeringData);
router.get("/students", getFirstYearBtechEngineeringData);
export default router;
