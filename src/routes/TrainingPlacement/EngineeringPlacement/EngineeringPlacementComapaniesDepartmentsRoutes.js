import {  createEngineeringCompaniesDepartment,
  getEngineeringCompaniesDepartment,
  deleteEngineeringCompaniesDepartment,
  updateEngineeringCompaniesDepartment,} from "../../../controllers/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesDepartmentsController.js";

import express from "express";

const router = express.Router();
router.use(express.json());
router.use(express.urlencoded({ extended:true}));
router.post("/submit", createEngineeringCompaniesDepartment);

router.get("/getdata", getEngineeringCompaniesDepartment);

router.delete("/:id", deleteEngineeringCompaniesDepartment);

router.put("/:id", updateEngineeringCompaniesDepartment);

export default router;


