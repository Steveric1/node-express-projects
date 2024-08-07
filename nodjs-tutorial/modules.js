// const amount = 12;
// 
// if (amount < 12) {
//     console.log("Amount is smaller");
// } else {
//     console.log("Amount is larger");
// }
// 
// 
// console.log("Hey it's  my node app!");
// console.log("keeping this url here, url: John-smilga/node-express-course");

// const { naomi, john } = require('./2-names');
// The basics of package.json


const names = require('./2-names');
const sayHi = require('./1-utils');

sayHi(names.mynames.ife);
sayHi(names.mynames.teni);
sayHi(names.name.naomi);
sayHi(names.name.eric);
console.log(names);
 