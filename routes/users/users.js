const express = require("express");

const {
  getCurrentUser,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
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
router.get("/verify/:verificationToken", verifyEmail);

module.exports = router;
