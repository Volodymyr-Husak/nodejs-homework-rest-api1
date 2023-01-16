const express = require("express");

const {
  contactsPostSchema,
  contactsPutSchema,
} = require("../../schemas/contactsSchemas");

const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactByIdController,
} = require("../../controllers/contactsControllers");

const router = express.Router();

// GET all contacts
router.get("/", getContactsController);

// GET contact by id
router.get("/:contactId", getContactByIdController);

// POST contact
router.post("/", contactsPostSchema, postContactController);

// DELETE contact
router.delete("/:contactId", deleteContactController);

router.put("/:contactId", contactsPutSchema, putContactByIdController);

module.exports = router;
