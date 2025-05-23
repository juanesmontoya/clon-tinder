import User from "../model/user.model.js";
import Match from "../model/matches.model.js";
import Swipes from "../model/swipes.model.js";
import { response } from "express";

export async function createMatch(origin_email, fate_email) {

  const originUser = await User.findOne({ email: origin_email });
  const fateUser = await User.findOne({ email: fate_email });
  
  const swipeOg = await validateSwipeLike(originUser._id, fateUser._id);
  const swipeFate = await validateSwipeLike(fateUser._id, originUser._id);

  if (!swipeOg || !swipeFate) {
    return false;
  }
  
  const match = new Match({
    user_og_id: originUser._id,
    user_fate_id: fateUser._id,
  });
  await match.save();
  return true;
};

export async function getMatches(email) {
  const user = await User.findOne({ email: email });
  const matches = await Match.find({
    user_og_id: user._id,
  });

  if (matches.length === 0) {
    return res.status(404).json({
      ok: 'false',
      message: "No matches found",
    });
  }

  return matches;
};

export async function validateSwipeLike(origin_id, fate_id) {
  const swipe = await Swipes.findOne({
    user_og_id: origin_id,
    user_fate_id: fate_id,
    action: "like",
  });
  if (swipe) {
    return true;
  } else {
    return false;
  }
}
