const { connectMongo } = require("./DB/connection");

require("dotenv").config();

const app = require("./app");

const start = async () => {
  await connectMongo();

  app.listen(3000, () => {
    console.log("Server running. Use our API on port: 3000");
  });
};

start();
