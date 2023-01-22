const {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("./contacts");

const { register, login } = require("./auth");
const { getCurrentUser } = require("./users");

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
};
