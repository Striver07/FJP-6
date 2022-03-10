let fs= require("fs");
console.log(fs);

let path = require("path");
console.log(path);

let fileName =path.join(__dirname ,"file.txt");
console.log(fileName);
//CRUD operation
// 1.create a file in node.js
fs.writeFileSync(fileName,"hello from file.txt file");

