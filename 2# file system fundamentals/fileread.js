//importing module for file system
const fs = require("fs");

//readdir is used to read the directory
fs.readdir("./", (err, content) => {
  if (err) {
    return err;
  }
  console.log(content);
});

fs.readFile("./test.txt", "utf-8", (err, content) => {
  console.log(content);
});

