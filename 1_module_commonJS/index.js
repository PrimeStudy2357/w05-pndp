const myModule = require("./src/myModule.js");

const { myObject, myFunction } = require("./src/myModule.js")

console.log(myModule.myValue);
console.log(myModule.myFunction());
console.log(myModule.myObject);

console.log(myObject);
console.log(myFunction());