import { Router } from "express";

import { getNewPerson,swipeDislike,swipeLike } from "../swipes/controller/swipes.controller.js";

const router = Router();

router.post("/getperson", getNewPerson);
router.post("/like", swipeLike);
router.post("/dislike", swipeDislike);

export default router;