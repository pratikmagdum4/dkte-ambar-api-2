import {  CreateImageSubmission} from "../../controllers/Submission/ImageSubmissionController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended: true}));

router.post("/upload", CreateImageSubmission);


export default router;