const {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts");

const { register, login, logout } = require("./auth");
const {
  getCurrentUser,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
  reVerification,
} = require("./users");

module.exports = {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
  register,
  login,
  getCurrentUser,
  logout,
  updateSubscriptionUser,
  updateAvatar,
  verifyEmail,
  reVerification,
};
