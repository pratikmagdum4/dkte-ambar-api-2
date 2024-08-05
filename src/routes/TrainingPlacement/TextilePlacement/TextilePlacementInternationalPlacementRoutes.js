import {createTextilePlacementInternationalPlacement,
  getTextilePlacementInternationalPlacement,
  deleteTextilePlacementInternationalPlacement,
  updateTextilePlacementInternationalPlacement,}from "../../../controllers/TrainingPlacement/TextilePlacement/TextilePlacementInternationalPlacementController.js";

  
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit", createTextilePlacementInternationalPlacement);

router.get("/getdata", getTextilePlacementInternationalPlacement);

router.put("/:id", updateTextilePlacementInternationalPlacement);

router.delete("/:id", deleteTextilePlacementInternationalPlacement);

export default router;
