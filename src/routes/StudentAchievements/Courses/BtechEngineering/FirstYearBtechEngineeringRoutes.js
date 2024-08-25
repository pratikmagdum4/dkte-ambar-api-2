import {
  saveBtechEngineeringAchievements,
  getBtechEngineeringAchievements,
  deleteBtechEngineeringAchievements,
  updateBtechEngineeringAchievements,
} from "../../../../controllers/StudentAchievements/Courses/BtechEngineering/FirstYearBtechEngineeringController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended:true}))



router.post("/submit/:year/:dept", saveBtechEngineeringAchievements);
router.get("/get/:year/:dept", getBtechEngineeringAchievements);
router.delete("/:year/:dept/:id", deleteBtechEngineeringAchievements);
router.put("/:year/:dept/:id", updateBtechEngineeringAchievements);

export default router;