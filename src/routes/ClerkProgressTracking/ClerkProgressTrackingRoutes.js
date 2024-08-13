import express from "express";
import { getClerkProgress } from "../../controllers/ClerkProgressTracking/ClerkProgressTrackingController.js";

const router = express.Router();

router.get("/progress/:department", getClerkProgress);

export default router;
