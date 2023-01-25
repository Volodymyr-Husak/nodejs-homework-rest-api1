const express = require("express");

const {
  getCurrentUser,
  updateSubscriptionUser,
  updateAvatar,
} = require("../../controllers");

const {
  auth,
  userSubscriptionStandard,
  uploadAvatar,
} = require("../../middlewares");
const { userSchemes } = require("../../schemas");
const { userPatchSchema } = userSchemes;

const router = express.Router();

router.get("/current", auth, getCurrentUser);
router.patch(
  "/current",
  auth,
  userPatchSchema,
  userSubscriptionStandard,
  updateSubscriptionUser
);
router.patch("/avatars", auth, uploadAvatar.single("avatar"), updateAvatar);

module.exports = router;
