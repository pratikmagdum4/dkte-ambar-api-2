import { createSponsorList,getSponsorList,updateSponsorList,deleteSponsorList } from "../../controllers/SponsoresList/SponsorlistController.js";

import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended:true}));

router.post("/submit", createSponsorList);
router.get("/getdata",getSponsorList);
router.put("/:id",updateSponsorList);
router.delete("/:id",deleteSponsorList);

export default router;