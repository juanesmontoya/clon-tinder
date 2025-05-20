import Swipe from "../model/swipes.model.js";
import { response } from "express";
import User from "../../users/model/user.model.js";

export const createSwipe = async (req, res = response) => {
  const { email } = req.body;

  const originUser = await User.findOne({ email: email });
  const fateUser = await validateFate(email);

  console.log("Origin User: ", originUser.email);
  console.log("Fate User: ", fateUser.email);

  return res.status(200).json({
    ok: true,
    message: "Swipe created successfully",
  });
};

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
