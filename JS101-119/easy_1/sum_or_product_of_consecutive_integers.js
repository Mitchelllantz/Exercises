function sum(arr) {
  return arr.reduce((acc, value) => acc + value);
}

function product(arr) {
  return arr.reduce((acc, value) => acc * value);
}

function makeArr (arr, integer) {
  for(let num = 1; num <= integer; num++) {
    arr.push(num);
  }
}

function totalNumberLine(arr, choice) {
  switch (choice) {
    case "s":
      return sum(arr);
    case "p":
      return product(arr);
  }
}

let numberLine = [];
let total = 0;
let readline = require('readline-sync');

let integer = readline.question("Please enter an integer greater than 0: ");
integer = Number.parseInt(integer, 10);

let choice = readline.question("Enter \"s\" to compute the sum, or \"p\" to compute the product.");
choice = choice.toLowerCase();

makeArr(numberLine, integer);
total = totalNumberLine(numberLine, choice);

console.log(`The total is ${total}`);


