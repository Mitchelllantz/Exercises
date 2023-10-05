let readline = require('readline-sync');

let limit = readline.question("To what number shall we count?");

let number = 0;

while (number <= limit) {
  console.log(number);
  number += 2;
}


