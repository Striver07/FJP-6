"E:\FJP-6\MODULE 02\NodeJs\path.js"
const { basename } = require('path');
let path = require('path');
console.log(path);

let extensionname = path.extname("E:\FJP-6\MODULE 02\NodeJs\path.js");
let extension_name = path.extname("E:\FJP-6\MODULE 01\DemoSite\index.html");
let Basename = path.basename(__filename);
let Base_name = path.basename(__dirname);

console.log(extensionname);
console.log(extension_name);
console.log(Basename);
console.log(Base_name);
console.log(__filename);
let dirPath = __dirname
console.log(dirPath);
 let newFile = path.join(dirPath,"test.js");
 console.log(newFile);