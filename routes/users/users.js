const express = require("express");

const { getCurrentUser, updateSubscriptionUser } = require("../../controllers");

const { auth, userSubscriptionStandard } = require("../../middlewares");
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

module.exports = router;
