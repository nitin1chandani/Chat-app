//chatName
//isGroupChhat
//users
//latestMessage
//groupAdmin
//mongoose is use to connect to data base
// and make queries to database
const mongoose = require("mongoose");
const chatModel = mongoose.Schema(
  {
    chatName: { type: String, trim: true },
    isGroupChat: { type: Boolean, default: false },
    users: [
      {
        type: mongoose.schema.Types.ObjectId,
        ref: "User",
      },
    ],
    latestMessage: {
      type: mongoose.schema.Types.ObjectId,
      ref: "Message",
    },
    groupAdmin: {
      type: mongoose.schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);
const Chat = mongoose.model("Chat,chatModel");
module.exports = Chat;
