const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const { chats } = require("./data/data");
const userRoutes = require("./routes/router");

const app = express();
const uri =
  "mongodb+srv://root:****@cluster0.wmltu3w.mongodb.net/?retryWrites=true&w=majority";
async function connect() {
  try {
    await mongoose.connect(uri);
    console.log("connected to MongoDB");
  } catch {
    console.log(error);
  }
}
connect();
dotenv.config();

app.get("/", (req, res) => {
  res.send("Our Api is running");
});

app.use("/api/user", userRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`server is Started on ${PORT} `);
});
