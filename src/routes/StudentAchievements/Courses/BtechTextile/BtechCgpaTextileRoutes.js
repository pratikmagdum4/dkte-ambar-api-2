import { handleBtechTextileCgpa } from "../../../../controllers/StudentAchievements/Courses/BtechTextile/BtechCgpaTextileController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));

router.post("/submit/:year",(req,res)=>{
    handleBtechTextileCgpa(req,res, "save");
})

router.get("/get/:year",(req,res)=>{
    handleBtechTextileCgpa(req,res, "get");
})

export default router;