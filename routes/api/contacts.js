const express = require("express");

const {
  contactsPostSchema,
  contactsPutSchema,
  contactsPatchSchema,
} = require("../../schemas");

const {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");

const router = express.Router();

// GET all contacts
router.get("/", getAllContacts);

// GET contact by id
router.get("/:contactId", getContact);

// POST contact
router.post("/", contactsPostSchema, addContact);

// DELETE contact
router.delete("/:contactId", deleteContact);

// UPDATE contact
router.put("/:contactId", contactsPutSchema, updateContact);

// UPDATE_STATUS contact
router.patch("/:contactId", contactsPatchSchema, updateStatusContact);

module.exports = router;
