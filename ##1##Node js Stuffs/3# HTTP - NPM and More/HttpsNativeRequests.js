//module for https requests
const https = require("https");

//modules for file system
const fs = require("fs");

//url for fetching data
const url = "https://jsonplaceholder.typicode.com/posts";

//making request to fetch data
https.get(url, res => {
  //setting encoding to encode data to utf-8 format
  res.setEncoding("utf-8");
  let body = "";

  //this.will fetch data and will add to
  res.on("data", data => {
    body += data;
  });

  //this will be executed after getting all response
  res.on("end", () => {
    //this will add data to data.json file
    fs.writeFile("./data.json", body, "utf-8", err => {
      if (err) {
        console.log(err);
      }
      console.log("data retrived and pulled to new file data.json");
    });
  });
});
