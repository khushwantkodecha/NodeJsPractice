const express = require("express");

let app = express();

const firstMiddleWare = (req, res, next) => {
  console.log("first widdleware running");
  next();
};

const secondMiddleWare = (req, res, next) => {
  console.log("second middleware is running");
  next();
};

app.get("/", firstMiddleWare, (req, res) => {
  res.send("Home");
});

app.get("/users", secondMiddleWare, (req, res) => {
  res.send("users page");
});

app.listen(1211, () => {
  console.log("server started");
});
