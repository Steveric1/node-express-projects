const path = require('path');

console.log(path.sep)
const absolutePath = path.resolve(__dirname, __filename);
console.log(absolutePath);
console.log(path.basename(absolutePath))