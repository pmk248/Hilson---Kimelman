import { Router } from "express";
import { verify } from "../middlewares/authMiddleware";
import { register } from "../controllers/authController";

const router = Router();

router.post('/', register)

export default router;