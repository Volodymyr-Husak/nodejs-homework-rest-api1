const mongoose = require("mongoose");

const connectMongo = async () => {
  mongoose.set("strictQuery", false);
  mongoose
    .connect(
      process.env.MONGO_URL,
      () => {
        console.log("Database connection successful");
      },
      {
        userNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .catch((error) => {
      console.warn(error);
      process.exit(1);
    });
};

module.exports = {
  connectMongo,
};
