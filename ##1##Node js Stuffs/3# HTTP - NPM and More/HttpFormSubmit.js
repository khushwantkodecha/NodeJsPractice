const fs = require("fs");
const http = require("http");

const server = http.createServer((req, res) => {
  let body = "";
  if (req.method === "GET") {
    res.setHeader("Content-Type", "text/html");
    res.writeHead(200);
    fs.readFile("./form.html", "utf-8", (err, content) => {
      if (err) {
        console.log(err);
      }
      res.write(content);
      res.end();
    });
  } else if (req.method === "POST") {
    req.on("data", data => {
      body += data;
    });
    req.on("end", () => {
      res.setHeader("Content-Type", "text/plain");
      res.writeHead(200);
      res.write(body, () => {
        res.end();
      });
    });
  } else {
    res.setHeader("Content-Type", "text/plain");
    res.writeHead(404);
    res.end("Page not found");
  }
});

server.listen(1111);
