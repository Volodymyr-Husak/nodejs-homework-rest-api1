const express = require("express");

const Joi = require("joi");

const contacts = require("../../models/contacts");

const router = express.Router();

const contactsPostSchema = Joi.object({
  name: Joi.string().min(3).max(30).required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
});
const contactsPutSchema = Joi.object({
  name: Joi.string().min(3).max(30),
  email: Joi.string(),
  phone: Joi.string(),
})
  .required()
  .min(1);

// GET all contacts
router.get("/", async (req, res, next) => {
  try {
    const data = await contacts.listContacts();

    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    next(error);
    // res.status(500).json({
    //   status: "error",
    //   code: 500,
    //   message: "Server error",
    // });
  }
});

// GET contact by id
router.get("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await contacts.getContactById(contactId);

    if (!data) {
      res.status(404).json({
        status: "error",
        code: 404,
        message: `Contact with id ${contactId} not found`,
      });
      return;
    }

    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    next(error);
  }
});

// POST contact
router.post("/", async (req, res, next) => {
  try {
    const { name, email, phone } = req.body;
    const { error } = contactsPostSchema.validate(req.body);

    // if (!name || !email || !phone) {
    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing required name field",
      });
      return;
    }

    const data = await contacts.addContact(name, email, phone);

    res.status(201).json({
      status: "success",
      code: 201,
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.delete("/:contactId", async (req, res, next) => {
  try {
    const { contactId } = req.params;
    const data = await contacts.removeContact(contactId);

    if (!data) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }

    res.json({
      status: "success",
      code: 200,
      message: "contact deleted",
      data,
    });
  } catch (error) {
    next(error);
  }
});

router.put("/:contactId", async (req, res, next) => {
  try {
    const { body } = req;
    const { error } = contactsPutSchema.validate(body);

    if (error) {
      res.status(400).json({
        status: "error",
        code: 400,
        message: "missing fields",
      });
      return;
    }
    const { contactId } = req.params;
    const result = await contacts.updateContact(contactId, req.body);

    if (!result) {
      return res.status(404).json({
        status: "error",
        code: 404,
        message: "Not found",
      });
    }
    res.json({
      status: "success",
      code: 200,
      result,
    });
  } catch (error) {
    next(error);
  }
  // res.json({ message: "template message" });
});

module.exports = router;
