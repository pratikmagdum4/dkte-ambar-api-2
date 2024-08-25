import {
  getMbaData,
  saveMbaData,
  deleteMbaData,
  updateMbaData,
} from "../../../../controllers/StudentAchievements/Courses/MBA/MBACommonController.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:year", saveMbaData);
router.get("/get/:year", getMbaData);
router.delete("/delete/:year/:id", deleteMbaData);
router.put("/update/:year/:id", updateMbaData);

export default router;
