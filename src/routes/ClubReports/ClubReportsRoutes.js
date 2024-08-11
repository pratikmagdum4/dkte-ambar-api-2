import { handleClubReports } from "../../controllers/ClubReports/ClubReportsController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:clubName/:dept", (req, res) => {
  handleClubReports(req, res, "create");
});

router.get("/getdata/:clubName", (req, res) => {
  handleClubReports(req, res, "get");
});
router.put("/:clubName/:id", (req, res) => {
  handleClubReports(req, res, "update");
});

router.delete("/:clubName/:id", (req, res) => {
  handleClubReports(req, res, "delete");
});

export default router;
