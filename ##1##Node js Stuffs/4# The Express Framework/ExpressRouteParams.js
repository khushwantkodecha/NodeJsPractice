const express = require("express");
const app = express();
const port = process.env.PORT || 1211;

app.get("/", (req, res) => {
  res.send("<h1>Home page</h1>");
});
app.get("/user/:id/order/:order_id", (req, res) => {
  res.send(`<h3>User id is ${req.params.id}</h3>
        <h3>Order id is ${req.params.order_id}</h3>
    `);
});

app.listen(port, () => {
  console.log("server is running at 1211");
});
