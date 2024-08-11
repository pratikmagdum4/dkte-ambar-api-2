import { ClerkCSE } from "../../controllers/ClerkProgressTracking/ClerkProgressTrackingController.js";

import express from    "express";

const router = express.Router();
console.log("i mhere save he ")
router.use(express.json());

router.use(express.urlencoded({ extended: true }));

router.get("/CSE", ClerkCSE);

export default router;