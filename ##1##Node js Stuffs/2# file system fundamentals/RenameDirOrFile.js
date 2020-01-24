//imorting module for handling for handling file system
const fs = require("fs");

//renaming or moving directories
// fs.renameSync("./NewDir", "NewDirTwo");

//renaming files
fs.renameSync("./NewDir/oldFile.txt", "./NewDir/newFile.txt");
