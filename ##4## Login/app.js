const express = require("express");
const bcrypt = require("bcryptjs");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const UsersLogin = require("./models/UsersLogin");

mongoose.Promise = global.Promise;

mongoose.connect("mongodb://127.0.0.1/login", { useNewUrlParser: true, useUnifiedTopology: true }, () => {
  console.log("db connected");
});

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/register", (req, res) => {
  const newUser = new UsersLogin();
  newUser.email = req.body.email;
  newUser.password = req.body.password;

  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) return err;
      newUser.password = hash;
      newUser
        .save()
        .then(savedUser => {
          res.send("user saved");
        })
        .catch(err => {
          res.send("user was not saved because we got " + err);
        });
    });
  });
});

app.post("/login", (req, res) => {
  UsersLogin.findOne({ email: req.body.email }).then(user => {
    if (user) {
      bcrypt.compare(req.body.password, user.password, (err, matched) => {
        if (err) return err;
        if (matched) {
          res.send("password matched and user is able to login");
        } else {
          res.send("user is not able to login beacause password did not match");
        }
      });
    } else {
      res.send("user does not exist");
    }
  });
});
app.listen(1111, () => {
  console.log("listening on port 1111");
});
