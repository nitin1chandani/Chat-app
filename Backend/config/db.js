const mongoose = require("mongoose");

const connectDB = async function connect() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("connected to MongoDB");
  } catch {
    console.log(error);
  }
};
module.exports = connectDB;
