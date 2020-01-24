//Mongoose is a MongoDB object modeling tool designed to work in an asynchronous environment.
//Mongoose supports both promises and callbacks.

const mongoose = require("mongoose");
const express = require("express");
const Users = require("./models/Users");
const app = express();
const bodyParser = require("body-parser");

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

//for use of promises in requests
mongoose.Promise = global.Promise;

//If your app uses only one database, you should use mongoose.connect.
//If you need to create additional connections, use mongoose.createConnection.

//connecting mongodb using mongoose
mongoose.connect("mongodb://localhost:27017/mongoose", { useNewUrlParser: true, useUnifiedTopology: true });

//checking that db is connected or not
mongoose.connection
  .once("open", () => {
    console.log("db connected");
  })
  .on("error", err => {
    console.log("could not connect to db", err);
  });

//landing page get url
app.get("/", (req, res) => {
  res.send("landing page");
});

//posting data using postman tool
//adding data to db using postman
app.post("/users", (req, res) => {
  console.log(req.body.firstName);
  //creating new user that will be pushed to Users model
  const newUser = new Users({
    firstName: req.body.firstName,
    lastName: req.body.lastName
  });

  //inserting data to collectins Users
  newUser
    .save()
    .then(user => {
      console.log("saved data", user);
      res.send("user saved");
    })
    .catch(err => {
      res.status(404).send("user could not add beacause we got a error");
    });
});

//showoing all users data on response
app.get("/users", (req, res) => {
  Users.find({}).then(user => {
    res.status(200).send(user);
  });
});

//updating user's firstname by getting his _id using patch method
app.patch("/users/:id", (req, res) => {
  const id = req.params.id;
  const firstName = req.body.firstName;

  Users.findByIdAndUpdate({ _id: id }, { $set: { firstName: firstName } }, { new: true }).then(savedUser => {
    res.send("user updated bt patch method");
  });
});

//updating user details by put request
app.put("/users/:id", (req, res) => {
  Users.findOne({ _id: req.params.id }).then(user => {
    user.firstName = req.body.firstName;
    user.lastName = req.body.lastName;
    user
      .save()
      .then(savedUser => {
        res.send(savedUser);
      })
      .catch(err => console.log(err));
  });
});

//deleting one use data
app.delete("/users/:id", (req, res) => {
  Users.findByIdAndDelete({ _id: req.params.id })
    .then(deltedUser => {
      res.send(`user ${deltedUser.firstName} deleted`);
    })
    .catch(err => {
      console.log(err);
    });
});

//listeining to the port
app.listen(1234, () => {
  console.log("listening on port 1234");
});
