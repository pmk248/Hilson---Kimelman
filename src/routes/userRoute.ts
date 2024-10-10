import { Router } from "express";
import { getAllUsers, createUser, editByName } from "../controllers/userController";

const router = Router()

router.get('/', getAllUsers)
router.post('/', createUser)
router.put('/', editByName)

export default router;