import { FacultyLogin } from "../../controllers/Login/CoFacultyLoginController.js";

import express from "express";
const router = new express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", FacultyLogin);

export default router;
