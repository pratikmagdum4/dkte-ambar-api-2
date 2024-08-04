import { handleDiplomaCgpa } from "../../../../controllers/StudentAchievements/Courses/Diploma/DiplomaController.js";

import express from "express";
const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({extended:true}));


router.post("/submit/:year",(req,res)=>{
    handleDiplomaCgpa(req, res, "save");
})


router.get("/get/:year",(req,res)=>{
    handleDiplomaCgpa(req, res, "get");
})

export default router;