import { Router } from "express";

import { createUser, loginUser } from "../users/controller/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.port("/login", loginUser)

export default router;