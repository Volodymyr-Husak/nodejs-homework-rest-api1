// const { Contact } = require("../DB/contactModal");
const { Contact } = require("../../DB");

async function getAllContacts(req, res) {
  try {
    // const data = await listContacts();
    const { _id } = req.user;
    // console.log(req.query);
    const { page = 1, limit = 20 } = req.query;
    const skip = (page - 1) * limit;
    const contacts = await Contact.find({ owner: _id }, "", {
      skip,
      limit: Number(limit),
    });

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
