const express = require("express");
const app = express();
const port = process.env.PORT || 1211;

app.get("/", (req, res) => {
  res.send("<h1>hello world!</h1>");
});

app.get("/test", (req, res) => {
//   res.send("<h1>api page</h1>");
  res.json({
    name: "khushwantkodecha",
    id: 1211
  });
});

app.listen(port, () => {
  console.log("server running at port number 1211");
});
