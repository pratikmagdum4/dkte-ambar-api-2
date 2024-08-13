import express from "express";
import {
  getClerkById,
  updateClerkInfo,
} from "../../controllers/SignUp/ClerkSignUpController.js";
const router = express.Router();

router.get("/clerk/:id", getClerkById);
router.put("/clerk/:id", updateClerkInfo);

export default router;
