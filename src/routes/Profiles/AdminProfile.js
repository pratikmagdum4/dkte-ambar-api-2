import express from 'express';
import { updateAdminInfo,getAdminById } from '../../controllers/SignUp/AdminSignUpController.js';
const router = express.Router();

router.get("/admin/:id", getAdminById);
router.put("/admin/:id", updateAdminInfo);

export default router;