import { Router } from "express";

import { createSwipe } from "../swipes/controller/swipes.controller.js";

const router = Router();

router.post("/createSwipe", createSwipe);

export default router;