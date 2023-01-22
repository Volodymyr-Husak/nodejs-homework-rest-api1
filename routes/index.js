const { contactsRouter } = require("./api");
const { authRouter, usersRouter } = require("./users");

module.exports = {
  contactsRouter,
  authRouter,
  usersRouter,
};
