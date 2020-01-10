const fs = require("fs");

//to write content to write.txt
//if file is not there then it will create new file named with write.txt
fs.writeFile("./write.txt", "writing to file!", "utf-8", (err, content) => {
  if (err) {
    return err;
  }
  console.log("file writed sucessfully");
});

//this will append data to write.txt
fs.appendFile("./write.txt", " appended data", "utf-8", err => {
  if (err) {
    return err;
  }
  console.log("file appeded sucessfully");
});
