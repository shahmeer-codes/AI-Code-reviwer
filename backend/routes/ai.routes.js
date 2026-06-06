import express from "express"
import { send_to_ai } from "../controller/ai.send.js";
const router = express.Router()

router.post("/send-code",send_to_ai)

export default router;