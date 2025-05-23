import { Router } from "express";

import { createUser, loginUser, logoutUser, getAllUsers } from "../users/controller/user.controller.js";

const router = Router();

router.post("/register", createUser);
router.post("/login", loginUser)
router.post("/logout", logoutUser)
router.get("/getAllUsers", getAllUsers)

export default router;