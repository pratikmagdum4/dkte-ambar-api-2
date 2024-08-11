import {
  createUpGraduation,
  getUpGraduation,
  updateUpGraduation,
  deleteUpGraduation,
} from "../../controllers/UpGraduation/UpGraduationQalificationController.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:dept", createUpGraduation);
router.get("/getdata", getUpGraduation);
router.put("/:id", updateUpGraduation);
router.delete("/:id", deleteUpGraduation);


export default router;