const mongoose = require("mongoose");

// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.MONGO_URL, () => {
//   console.log("Connected to MongoDB");
// });

const connectMongo = async () => {
  //   mongoose.connect(
  //     // process.env.MONGO_URL,
  //     MONGO_URL,
  //     {
  //       userNewUrlParser: true,
  //       useUnifiedTopology: true,
  //     }
  //   );
  mongoose.set("strictQuery", false);
  mongoose.connect(
    process.env.MONGO_URL,
    () => {
      console.log("Database connection successful");
    },
    {
      userNewUrlParser: true,
      useUnifiedTopology: true,
    }
  );
};

module.exports = {
  connectMongo,
};
