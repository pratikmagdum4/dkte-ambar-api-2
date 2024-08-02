import { handleBtechCgpa } from "../../../../controllers/StudentAchievements/Courses/BtechEngineering/BtechCgpaController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/submit/:year",(req,res)=>{
    handleBtechCgpa(req,res, "save");
})

router.get("/get/:year",(req,res)=>{
    handleBtechCgpa(req,res, "get");
})

export default router;