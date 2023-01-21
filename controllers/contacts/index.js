const { getAllContacts } = require("./getAllContacts");
const { getContact } = require("./getContact");
const { addContact } = require("./addContact");
const { deleteContact } = require("./deleteContact");
const { updateContact } = require("./updateContact");
const { updateStatusContact } = require("./updateStatusContact");

module.exports = {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
};
