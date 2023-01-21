const { Contact } = require("../../DB");

async function addContact(req, res) {
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

module.exports = {
  addContact,
};
