//for( let i = 1; i <100; i += 2) {
//  console.log( i , '\n');
//};

let readline = require('readline-sync');

limitNum = readline.question('To what number do you want to count to?');

let i = 1;
while (i <limitNum) {
console.log(i);
  i += 2;
};


