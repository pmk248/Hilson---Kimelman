import { Router } from "express";
import { verify } from "../middlewares/authMiddleware";

const router = Router();

router.post('/', verify)

export default router;