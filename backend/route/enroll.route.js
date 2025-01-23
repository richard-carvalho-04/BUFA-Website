import express from "express";
import { enroll } from "../controller/enroll.controller.js";

const router = express.Router();

router.post("/enroll", enroll);

export default router;
``