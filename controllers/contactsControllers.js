const {
  listContacts,
  //   getContactById,
  //   addContact,
  //   removeContact,
  //   updateContact,
} = require("../models/contacts");

async function getContactsController(req, res, next) {
  // async (req, res, next) => {
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

module.exports = {
  getContactsController,
};
