import {createTextilePlacementDepartments,
  getTextilePlacementDepartments,
  deleteTextilePlacementDepartments,
  updateTextilePlacementDepartments,}from "../../../controllers/TrainingPlacement/TextilePlacement/TextilePlacementDepartmentsController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createTextilePlacementDepartments);

router.get("/getdata", getTextilePlacementDepartments);

router.put("/:id", updateTextilePlacementDepartments);

router.delete("/:id", deleteTextilePlacementDepartments);

export default router;