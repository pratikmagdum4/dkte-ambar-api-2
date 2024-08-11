import { createEngineeringCompaniesPackageOffered,
  getEngineeringCompaniesPackageOffered,
  deleteEngineeringCompaniesPackageOffered,
  updateEngineeringCompaniesPackageOffered,}from "../../../controllers/TrainingPlacement/EngineeringPlacement/EngineeringPlacementComapaniesPackageOfferedController.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createEngineeringCompaniesPackageOffered);

router.get("/getdata", getEngineeringCompaniesPackageOffered);

router.put("/:id", updateEngineeringCompaniesPackageOffered);

router.delete("/:id", deleteEngineeringCompaniesPackageOffered);

export default router;