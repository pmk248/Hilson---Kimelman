"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const authMiddleware_1 = require("../middlewares/authMiddleware");
const router = (0, express_1.Router)();
router.get('/', authMiddleware_1.verify, userController_1.getAllUsers);
router.post('/', userController_1.createUser);
router.put('/', userController_1.editByName);
exports.default = router;
