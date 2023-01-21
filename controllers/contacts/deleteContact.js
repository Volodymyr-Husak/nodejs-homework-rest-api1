const { Contact } = require("../../DB");

async function deleteContact(req, res) {
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

module.exports = {
  deleteContact,
};
