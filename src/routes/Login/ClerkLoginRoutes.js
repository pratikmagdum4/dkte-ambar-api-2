
import { ClerkLogin } from "../../controllers/Login/ClerkLoginController.js"; 

import express from "express";
const router = new express.Router();

console.log("hi htere ")
router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/:department", ClerkLogin);

export default router;











