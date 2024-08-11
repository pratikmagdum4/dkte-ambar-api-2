import { createTextileCompaniesInternational,
  getTextileCompaniesInternational,
  deleteTextileCompaniesInternational,
  updateTextileCompaniesInternational,}from "../../../controllers/TrainingPlacement/TextileCompanies/TextileCompaniesInternationalController.js";

  import express from "express";

  const router = express.Router();

  router.use(express.json());
  router.use(express.urlencoded({ extended: true }));

  router.post("/submit/:dept", createTextileCompaniesInternational);
  router.get("/getdata", getTextileCompaniesInternational);
  router.delete("/delete/:id", deleteTextileCompaniesInternational);
  router.put("/update/:id", updateTextileCompaniesInternational);

  export default router;

