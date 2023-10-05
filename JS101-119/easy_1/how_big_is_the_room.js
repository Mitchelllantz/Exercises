let readline = require('readline-sync');
const SQMETERS_TO_SQFEET = 10.7639;
console.clear();
let length = readline.question("What is the length of the room in feet?");
length = parseInt(length, 10);
console.clear();
let width = readline.question("What is the width of the room in feet?");
length = parseInt(length, 10);
console.clear();
let areaInSqFeet = (length * width).toFixed(2);
 
let areaInSqMeters = (areaInSqFeet / SQMETERS_TO_SQFEET).toFixed(2);
console.clear();
console.log(`The room is ${areaInSqFeet} sqft or ${areaInSqMeters} square meters large.`);

