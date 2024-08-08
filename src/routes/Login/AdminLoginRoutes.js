import { AdminLogin } from "../../controllers/Login/AdminLoginController.js";

import express from "express";
const router = new express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/", AdminLogin);

export default router;
