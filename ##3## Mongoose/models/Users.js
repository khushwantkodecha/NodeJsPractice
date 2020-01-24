const mongoose = require("mongoose");

//for creating model using schema
const Schema = mongoose.Schema;

// const Users = mongoose.model("Users", {
//   firstName: {
//     type: String,
//     required: true,
//     minlength: 2,
//     trim: true
//   },
//   lastName: {
//     type: String,
//     required: true,
//     trim: true
//   },
//   isActive: {
//     type: Number,
//     default: 0
//   }
// });

// module.exports = { Users };

//creating model using schema(anothet way of creating model)
const UserSchema = new Schema({
  firstName: {
    type: String,
    required: true,
    minlength: 2,
    trim: true
  },
  lastName: {
    type: String,
    required: true,
    trim: true
  },
  isActive: {
    type: Number,
    default: 0
  }
});

module.exports = mongoose.model("Users", UserSchema);
