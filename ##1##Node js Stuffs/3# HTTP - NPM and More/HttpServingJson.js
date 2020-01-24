//module for getting response from https url of posts
const https = require("https");
//for creating server
const http = require("http");
//module for file system
const fs = require("fs");

//url for fetching info of json format
const url = "https://jsonplaceholder.typicode.com/posts";

//creating server
const server = http.createServer((req, res) => {
  //checking conditions for method and url
  if (req.method === "GET" && req.url === "/posts") {
    //getting native respones by https object
    https.get(url, serverRes => {
      //setting encoding for incoming response
      serverRes.setEncoding("utf-8");

      //will retrive data and console that json data
      serverRes.on("data", data => {
        res.write(data);
        console.log(data);
      });

      //will close server afater retriving data from url
      serverRes.on("end", () => {
        res.end();
        console.log("resopnes retrived");
        console.log("server closed");
      });
    });
  }
});

//will listen to the created server
server.listen(1234);
