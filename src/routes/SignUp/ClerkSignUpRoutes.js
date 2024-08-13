import express from "express";
import { clerkSignup } from "../../controllers/SignUp/ClerkSignUpController.js"; 

const router = express.Router();

// POST /signup/clerk - Clerk signup route
router.post("/clerk", clerkSignup);

export default router;
