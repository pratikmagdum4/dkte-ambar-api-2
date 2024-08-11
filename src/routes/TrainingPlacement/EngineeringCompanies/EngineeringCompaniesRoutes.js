import {createEngineeringCompanies,
  getEngineeringCompanies,
  deleteEngineeringCompanies,
  updateEngineeringCompanies} from "../../../controllers/TrainingPlacement/EngineeringCompanies/EngineeringCompaniesController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));


router.post("/submit/:dept", createEngineeringCompanies);

router.get("/getdata", getEngineeringCompanies);

router.put("/:id", updateEngineeringCompanies);

router.delete("/:id", deleteEngineeringCompanies);

export default router;