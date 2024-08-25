
import {
  getFirstYearDiplomaData,
  saveFirstYearDiplomaData,
  deleteFirstYearDiplomaData,
  updateFirstYearDiplomaData,
} from "../../../../controllers/StudentAchievements/Courses/Diploma/DiplomaCommonController.js";



import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:year/:dept", saveFirstYearDiplomaData);
router.get("/get/:year/:dept", getFirstYearDiplomaData);
router.delete("/:year/:dept/:id", deleteFirstYearDiplomaData);
router.put("/:year/:dept/:id", updateFirstYearDiplomaData);

export default router;
