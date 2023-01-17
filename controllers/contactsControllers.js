// const {
//   listContacts,
//   getContactById,
//   addContact,
//   removeContact,
//   updateContact,
// } = require("../models/contacts");

const { Contact } = require("../DB/contactModal");

async function getContactsController(req, res) {
  try {
    // const data = await listContacts();
    const contacts = await Contact.find();

    res.json({
      status: "success",
      code: 200,
      contacts,
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
    // const data = await getContactById(contactId);
    const contact = await Contact.findOne({ _id: contactId });

    if (!contact) {
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
      contact,
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
    const { name, email, phone, favorite } = req.body;
    const newContact = {
      name,
      email,
      phone,
      favorite,
    };

    if (!newContact.favorite) {
      newContact.favorite = false;
    }
    // const data = await addContact(name, email, phone);
    // const newContact = Contact.create({ name, email, phone });
    Contact.create(newContact);

    res.status(201).json({
      status: "success",
      code: 201,
      newContact,
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
    // const data = await removeContact(contactId);
    const contact = await Contact.findOneAndRemove({ _id: contactId });

    if (!contact) {
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
      contact,
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
    // const result = await updateContact(contactId, req.body);
    const result = await Contact.findOneAndUpdate(
      { _id: contactId },
      { $set: req.body }
    );
    // console.log(updateContact);
    const updateContact = await Contact.findOne({ _id: contactId });

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
      updateContact,
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
async function updateStatusContactByIdController(req, res) {
  const { contactId } = req.params;

  const result = await Contact.findOneAndUpdate(
    { _id: contactId },
    { $set: req.body }
  );

  const updateContact = await Contact.findOne({ _id: contactId });

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
    updateContact,
  });
}

module.exports = {
  getContactsController,
  getContactByIdController,
  postContactController,
  deleteContactController,
  putContactByIdController,
  updateStatusContactByIdController,
};
