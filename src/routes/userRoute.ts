import { Router } from "express";
import { getAllUsers, createUser, editByName } from "../controllers/userController";
import { verify } from "../middlewares/authMiddleware";

const router = Router()

router.get('/', verify, getAllUsers)
router.post('/', createUser)
router.put('/', editByName)

export default router;