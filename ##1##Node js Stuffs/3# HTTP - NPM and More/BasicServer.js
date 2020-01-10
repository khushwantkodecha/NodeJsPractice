//module for http requests
const http = require("http");

//createSercver is used for creating server
const server = http.createServer((req, res) => {
  //this will console method of the request
  console.log(req.method);
  //setHeadet add headers to the request url
  //content type define type of the content that will be shown in response
  res.setHeader("Content-type", "application/json");
  //Access-Control-Allow-Origin defines type of browser '*' allows for all
  res.setHeader("Access-Control-Allow-Origin", "*");
  //writeHead defines the status code
  res.writeHead(200); // 200 means OK

  //response object that will be sending in body of response
  let dataObj = {
    id: "1211",
    name: "khushwant kodecha",
    autherized: true
  };

  //converting object to string because we cant send object in response
  let data = JSON.stringify(dataObj);

  //it will stop the process and will send data in response
  res.end(data);
});

//this will listen requests at port number '1234'
server.listen(1234, () => {
  console.log('open browser and type in url "http://localhost:1234" for getting response');
});
