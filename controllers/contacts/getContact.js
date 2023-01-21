const { Contact } = require("../../DB");

async function getContact(req, res) {
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

module.exports = {
  getContact,
};
