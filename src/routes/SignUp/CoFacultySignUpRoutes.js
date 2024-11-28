import express from "express";
import { facultySignup } from "../../controllers/SignUp/CoFacultySignUpController.js";

const router = express.Router();

// POST /signup/clerk - Clerk signup route
router.post("/faculty", facultySignup);

export default router;
