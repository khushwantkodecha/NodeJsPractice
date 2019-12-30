const fs = require("fs");

//removing directories synchronusly
//fs.rmdirSync("NewDir");

//removing files from directories
try {
  fs.unlinkSync("./NewDir/test2.txt");
} catch (err) {
  console.log(err + "error is here");
}

