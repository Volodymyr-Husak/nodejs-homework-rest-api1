const express = require("express");

const { contactSchemes } = require("../../schemas");

const {
  getAllContacts,
  getContact,
  addContact,
  deleteContact,
  updateContact,
  updateStatusContact,
} = require("../../controllers");

const { auth } = require("../../middlewares");

const { contactPostSchema, contactPutSchema, contactPatchSchema } =
  contactSchemes;

const router = express.Router();

// GET all contacts
router.get("/", auth, getAllContacts);

// GET contact by id
router.get("/:contactId", auth, getContact);

// POST contact
router.post("/", auth, contactPostSchema, addContact);

// DELETE contact
router.delete("/:contactId", auth, deleteContact);

// UPDATE contact
router.put("/:contactId", auth, contactPutSchema, updateContact);

// UPDATE_STATUS contact
router.patch("/:contactId", auth, contactPatchSchema, updateStatusContact);

module.exports = router;
