import { createTextileCompaniesInternational,
  getTextileCompaniesInternational,
  deleteTextileCompaniesInternational,
  updateTextileCompaniesInternational,}from "../../../controllers/TrainingPlacement/TextileCompanies/TextileCompaniesInterNationalController.js";

  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit", createTextileCompaniesInternational);
  router.get("/getdata", getTextileCompaniesInternational);
  router.delete("/delete/:id", deleteTextileCompaniesInternational);
  router.put("/update/:id", updateTextileCompaniesInternational);

  export default router;

