let cp = require('child_process');
console.log(cp);

//opening calculator using childprocess and excelfilesync
cp.execFileSync('calc');
cp.execSync('code');
 let content = cp.execSync('node test.js');
 console.log(" output of test file  "  +content);
