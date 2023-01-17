const express = require("express");

const {
  contactsPostSchema,
  contactsPutSchema,
  contactsPatchSchema,
} = require("../../schemas/contactsSchemas");

const {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactByIdController,
  updateStatusContactByIdController,
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

// UPDATE contact
router.put("/:contactId", contactsPutSchema, putContactByIdController);

// UPDATE_STATUS contact
router.patch(
  "/:contactId",
  contactsPatchSchema,
  updateStatusContactByIdController
);

module.exports = router;
