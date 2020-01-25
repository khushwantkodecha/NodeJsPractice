const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Posts = new Schema({
  title: {
    type: String,
    required: true
  },
  allowComments: {
    type: Boolean,
    required: true
  },
  status: {
    type: String,
    default: "public"
  },
  body: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Posts", "Posts");
