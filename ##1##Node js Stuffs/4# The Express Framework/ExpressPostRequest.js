const express = require("express");
const bodyParser = require("body-parser");

let app = express();

console.log(__dirname);

// support parsing of application/json type post data
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/form", express.static(__dirname + "/public"));

app.post("/post", (req, res) => {
  res.send(req.body);
  console.log("its working");
  console.log(req.body);
});
app.get("/", (req, res) => {
  res.send("Home page");
});

app.listen(1211, () => console.log("server is started"));
