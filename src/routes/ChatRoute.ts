import { convert } from "../controllers/ChatController";
import express from "express";

const router = express.Router();

router.get('/convert', convert)

export default router;