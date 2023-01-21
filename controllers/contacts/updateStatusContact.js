const { Contact } = require("../../DB");

async function updateStatusContact(req, res) {
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
  updateStatusContact,
};
