const express = require("express");

const {
  contactPostSchema,
  contactPutSchema,
  contactPatchSchema,
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
router.post("/", contactPostSchema, addContact);

// DELETE contact
router.delete("/:contactId", deleteContact);

// UPDATE contact
router.put("/:contactId", contactPutSchema, updateContact);

// UPDATE_STATUS contact
router.patch("/:contactId", contactPatchSchema, updateStatusContact);

module.exports = router;
