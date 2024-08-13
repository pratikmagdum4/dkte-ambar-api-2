import express from "express";
import {
  sendResetEmail,
  resetPassword,
} from "../../controllers/ResetPassword/AdminPasswordResetController.js";

const router = express.Router();

// Route to request a password reset
router.post("/forgot-password", sendResetEmail);

// Route to reset the password
router.post("/reset-password/:token", resetPassword);

export default router;
