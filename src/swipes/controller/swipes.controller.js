import Swipe from "../model/swipes.model.js";
import { response } from "express";
import User from "../../users/model/user.model.js";

async function createSwipe (origin_id, fate_id, action) {

  const swipe = new Swipe({
    user_og_id: origin_id,
    user_fate_id: fate_id,
    action: action,
  });

  await swipe.save();
};

export const swipeLike = async (req, res = response) => {
  const { origin_email, fate_email } = req.body;

  const originUser = await User.findOne({ email: origin_email });
  const fateUser = await User.findOne({ email: fate_email });

  createSwipe(originUser._id, fateUser._id, "like");

  return res.status(200).json({
    ok: true,
    message: "Liked"
  });
}

export const swipeDislike = async (req, res = response) => {
  const { origin_email, fate_email } = req.body;

  const originUser = await User.findOne({ email: origin_email });
  const fateUser = await User.findOne({ email: fate_email });

  createSwipe(originUser._id, fateUser._id, "dislike");

  return res.status(200).json({
    ok: true,
    message: "Disliked"
  });
}

export const getNewPerson = async (req, res = response) => {
  const { email } = req.body;

  const fateUser = await validateFate(email);
  
  return res.status(200).json({
    ok: true,
    message: "New person found",
    fateUser
  });
}

async function validateFate(email) {
  var fateUser = await randomFate();
  const ogUser = await User.findOne({ email: email });
  do {
    fateUser = await randomFate();
  } while (fateUser.email == ogUser.email);

  const swipeExists = await Swipe.findOne({
    user_og_id: ogUser._id,
    user_fate_id: fateUser._id,
  });

  if (swipeExists) {
    validateFate(email);
  }

  return fateUser;
}

function randomN(max) {
  return Math.floor(Math.random() * max);
}

async function randomFate() {
  const users = await User.find();
  const randomIndex = randomN(users.length);
  const user = users[randomIndex];
  return user;
}
