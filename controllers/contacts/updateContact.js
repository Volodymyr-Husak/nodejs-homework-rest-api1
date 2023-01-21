const { Contact } = require("../../DB");

async function updateContact(req, res) {
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

module.exports = {
  updateContact,
};
