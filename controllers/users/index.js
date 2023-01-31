const { getCurrentUser } = require("./getCurrentUser");
const { updateSubscriptionUser } = require("./updateSubscriptionUser");
const { updateAvatar } = require("./updateAvatar");
const { verifyEmail } = require("./verifyEmail");
const { reVerification } = require("./reVerification");

module.exports = {
  getCurrentUser,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
  reVerification,
};
