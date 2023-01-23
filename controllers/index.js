const {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts");

const { register, login, logout } = require("./auth");
const { getCurrentUser, updateSubscriptionUser } = require("./users");

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
};
