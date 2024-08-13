import express from "express";
import {
  sendClerkResetEmail,
  resetClerkPassword,
} from "../../controllers/ResetPassword/ClerkPasswordResetController.js";

const router = express.Router();

// Route to request a password reset
router.post("/forgot-password", sendClerkResetEmail);

// Route to reset the password
router.post("/reset-password/:token", resetClerkPassword);

export default router;
