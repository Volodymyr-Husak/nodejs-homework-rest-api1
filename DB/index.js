const { Contact, User } = require("./modals");
const { connectMongo } = require("./connection");

module.exports = {
  Contact,
  User,
  connectMongo,
};
