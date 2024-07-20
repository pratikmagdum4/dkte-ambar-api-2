import { handleMainEvents } from "../../controllers/MainEvents/MainEventsController.js";
import express from "express";

const router = express.Router();

router.use(express.json());
router.use(express.urlencoded({ extended: true }));

router.post("/submit/:eventName", (req, res) =>
  handleMainEvents(req, res, "create")
);
router.get("/getdata/:eventName", (req, res) =>
  handleMainEvents(req, res, "get")
);
router.put("/:eventName/:id", (req, res) =>
  handleMainEvents(req, res, "update")
);
router.delete("/:eventName/:id", (req, res) =>
  handleMainEvents(req, res, "delete")
);

export default router;
