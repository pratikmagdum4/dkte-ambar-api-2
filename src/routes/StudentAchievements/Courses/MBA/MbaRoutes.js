import { handleMbaCgpa } from "../../../../controllers/StudentAchievements/Courses/MBA/MBAController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/submit/:year",(req,res)=>{
    handleMbaCgpa(req, res, "save");
})

router.get("/get/:year",(req,res)=>{
    handleMbaCgpa(req, res, "get");
})

export default router;