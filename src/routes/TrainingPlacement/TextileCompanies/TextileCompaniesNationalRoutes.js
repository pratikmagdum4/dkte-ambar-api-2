import {createTextileCompaniesNational,
  getTextileCompaniesNational,
  deleteTextileCompaniesNational,
  updateTextileCompaniesNational,}from "../../../controllers/TrainingPlacement/TextileCompanies/TextileCompaniesNationalController.js";


import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createTextileCompaniesNational);

router.get("/getdata", getTextileCompaniesNational);

router.put("/:id", updateTextileCompaniesNational);

router.delete("/:id", deleteTextileCompaniesNational);

export default router;