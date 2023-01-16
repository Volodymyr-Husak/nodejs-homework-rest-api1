const {
  listContacts,
  getContactById,
  addContact,
  removeContact,
  updateContact,
} = require("../models/contacts");

async function getContactsController(req, res) {
  try {
    const data = await listContacts();

    res.json({
      status: "success",
      code: 200,
      data,
    });
  } catch (error) {
    // next(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

async function getContactByIdController(req, res) {
  try {
    const { contactId } = req.params;
    const data = await getContactById(contactId);

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
    // next(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

async function postContactController(req, res) {
  try {
    const { name, email, phone } = req.body;

    const data = await addContact(name, email, phone);

    res.status(201).json({
      status: "success",
      code: 201,
      data,
    });
  } catch (error) {
    //   next(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

async function deleteContactController(req, res) {
  try {
    const { contactId } = req.params;
    const data = await removeContact(contactId);

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
    // next(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

async function putContactByIdController(req, res) {
  try {
    const { contactId } = req.params;
    const result = await updateContact(contactId, req.body);

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
    // next(error);
    res.status(500).json({
      status: "error",
      code: 500,
      message: "Server error",
    });
  }
}

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactByIdController,
};
