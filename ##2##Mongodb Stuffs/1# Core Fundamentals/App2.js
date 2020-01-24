//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
//Mongoose supports both promises and callbacks.

const mongoose = require("mongoose");

//If your app uses only one database, you should use mongoose.connect.
//If you need to create additional connections, use mongoose.createConnection.

//connecting mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/animals", { useNewUrlParser: true, useUnifiedTopology: true });

mongoose.connection
  .once("open", () => {
    console.log("db connected");
  })
  .on("error", err => {
    console.log("could not connect to db", err);
  });
