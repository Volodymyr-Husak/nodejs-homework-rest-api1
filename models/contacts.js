// const fs = require('fs/promises')
const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.resolve("./models/contacts.json");

const listContacts = async () => {
  const data = await fs.readFile(contactsPath, "utf8");

  return JSON.parse(data);
};

const getContactById = async (contactId) => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const currentContact = contacts.find((contact) => contact.id === contactId);
  return currentContact;
};

const removeContact = async (contactId) => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const currentContactById = contacts.find(
    (contact) => contact.id === contactId
  );
  if (!currentContactById) {
    return null;
  }
  const newContacts = contacts.filter((contact) => contact.id !== contactId);
  await fs.writeFile(
    contactsPath,
    JSON.stringify(newContacts, null, 4),
    "utf8"
  );
  return currentContactById;
};

// const addContact = async (body) => {
const addContact = async (name, email, phone) => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const id = Math.round(Math.random() * 100000000000).toString();
  const newContact = {
    id,
    name,
    email,
    phone,
  };
  const newContacts = [...contacts, newContact];
  await fs.writeFile(
    contactsPath,
    JSON.stringify(newContacts, null, 4),
    "utf8"
  );
  const newData = await fs.readFile(contactsPath, "utf8");
  const contacts2 = JSON.parse(newData);
  const currentContact = contacts2.find(
    (contact) => contact.id === newContact.id
  );
  return currentContact;
};

const updateContact = async (contactId, body) => {
  const data = await fs.readFile(contactsPath, "utf8");
  const contacts = JSON.parse(data);
  const currentContactById = contacts.find(
    (contact) => contact.id === contactId
  );

  if (!currentContactById) {
    return null;
  }

  const updateContact = { ...currentContactById, ...body };
  const contactsWithoutContactById = contacts.filter(
    (contact) => contact.id !== contactId
  );
  const newContacts = [...contactsWithoutContactById, updateContact];
  await fs.writeFile(
    contactsPath,
    JSON.stringify(newContacts, null, 4),
    "utf8"
  );

  return updateContact;
};

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateContact,
};
