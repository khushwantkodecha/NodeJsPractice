const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  //checking the url path
  if (req.url === "/") {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    fs.readFile("./test.html", "utf-8", (err, content) => {
      res.end(content);
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(404);
    res.end("404 data not found");
  }
});

server.listen(1234, () => {
  console.log('opend any browser and type "http://localhost:1234" to get the data ');
});
