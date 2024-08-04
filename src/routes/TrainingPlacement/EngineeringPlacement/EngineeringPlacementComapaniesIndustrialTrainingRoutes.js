import {createEngineeringCompaniesIndustrialTraining,
  getEngineeringCompaniesIndustrialTraining,
  deleteEngineeringCompaniesIndustrialTraining,
  updateEngineeringCompaniesIndustrialTraining,}from "../../../controllers/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesIndustrailTrainingController.js";


  import express from "express";
  const router = express.Router();
  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));
  
  router.post("/submit", createEngineeringCompaniesIndustrialTraining);
  router.get("/getdata", getEngineeringCompaniesIndustrialTraining);
  router.put("/:id", updateEngineeringCompaniesIndustrialTraining);
  router.delete("/:id", deleteEngineeringCompaniesIndustrialTraining);
  
  export default router;