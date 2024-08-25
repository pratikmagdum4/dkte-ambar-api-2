
import {
  saveBtechTextileAchievements,
  getBtechTextileAchievements,
  deleteBtechTextileAchievements,
  updateBtechTextileAchievements,
} from "../../../../controllers/StudentAchievements/Courses/BtechTextile/BtechTextileNewController.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:year/:dept", saveBtechTextileAchievements);
router.get("/get/:year/:dept", getBtechTextileAchievements);
router.delete("/:year/:dept/:id", deleteBtechTextileAchievements);
router.put("/:year/:dept/:id", updateBtechTextileAchievements);

export default router;
