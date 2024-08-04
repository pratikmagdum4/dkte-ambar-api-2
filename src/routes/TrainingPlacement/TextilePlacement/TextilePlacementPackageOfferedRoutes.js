import {  createTextilePlacementPackageOffered,
  getTextilePlacementPackageOffered,
  deleteTextilePlacementPackageOffered,
  updateTextilePlacementPackageOffered,}from "../../../controllers/TrainingPlacement/TextilePlacement/TextilePlacementPackageOfferedController.js";



  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createTextilePlacementPackageOffered);
  router.get("/getdata", getTextilePlacementPackageOffered);
  router.delete("/delete/:id", deleteTextilePlacementPackageOffered);
  router.put("/update/:id", updateTextilePlacementPackageOffered);

  export default router;

// const router = express.Router();