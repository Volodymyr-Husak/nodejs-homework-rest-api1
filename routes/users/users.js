const express = require("express");

const {
  getCurrentUser,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
  reVerification,
} = require("../../controllers");

const {
  auth,
  userSubscriptionStandard,
  uploadAvatar,
} = require("../../middlewares");
const { userSchemes } = require("../../schemas");
const { userPatchSchema, presenceEmailSchema } = userSchemes;

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
router.post("/verify", presenceEmailSchema, reVerification);

module.exports = router;
