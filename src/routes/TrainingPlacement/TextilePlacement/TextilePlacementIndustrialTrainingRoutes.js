import { createTextilePlacementIndustrialTraining,
  getTextilePlacementIndustrialTraining,
  deleteTextilePlacementIndustrialTraining,
  updateTextilePlacementIndustrialTraining,}from "../../../controllers/TrainingPlacement/TextilePlacement/TextilePlacementIndustrialTrainingController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createTextilePlacementIndustrialTraining);

router.get("/getdata", getTextilePlacementIndustrialTraining);

router.put("/:id", updateTextilePlacementIndustrialTraining);

router.delete("/:id", deleteTextilePlacementIndustrialTraining);

export default router;
