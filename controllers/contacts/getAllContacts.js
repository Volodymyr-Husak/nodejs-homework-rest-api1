// const { Contact } = require("../DB/contactModal");
const { Contact } = require("../../DB");

async function getAllContacts(req, res) {
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

module.exports = {
  getAllContacts,
};
