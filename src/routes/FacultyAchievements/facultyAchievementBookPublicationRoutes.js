import express from "express";
const router = express.Router();
import {
  createFacultyAchievementBookPublication,
  deleteFacultyAchievementBookPublication,
  getFacultyAchievementsBookPublication,
  updateFacultyAchievementBookPublication,
} from "../../controllers/FacultyAchievements/facultyAchievementBookPublicationController.js";
// Middleware to parse JSON and URL-encoded bodies
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createFacultyAchievementBookPublication);
router.delete("/:id", deleteFacultyAchievementBookPublication);
router.get("/getdata", getFacultyAchievementsBookPublication);
router.put("/:id", updateFacultyAchievementBookPublication);

export default router;
