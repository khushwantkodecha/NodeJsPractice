const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
  email: {
    type: String,
    minlength: 3,
    unique: true,
    trim: true,
    required: true
  },
  password: {
    type: String,
    required: true,
    minlength: 5
  }
});

module.exports = mongoose.model("UsersLogin", userSchema);
