// making files in folder in node js 
const { log } = require("console");
const fs = require("fs");
// using path module provided by node js 

const path = require("path");
const dirPath = path.join(__dirname, "files");
console.log(dirPath);

// creating dynaming files in folder

for (let i = 0; i <= 4; i++) {
  // both are similar 
  // fs.writeFileSync( dirPath+'/hello'+i+ '.txt', 'simple text file');
  fs.writeFileSync(`hello${i}'.txt`, 'simple text file');
}


//get file names and printing in console
// reading files  of directory
fs.readdir(dirPath, (err, files) => {
  console.log(files);
  files.forEach((item) => {
    console.log(`file name is ${item}`);
  });
});
 