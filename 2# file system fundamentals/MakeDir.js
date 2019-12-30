const fs = require("fs");

fs.mkdir("dirName", err => {
  if (err) {
    console.log(err);
  }
});
