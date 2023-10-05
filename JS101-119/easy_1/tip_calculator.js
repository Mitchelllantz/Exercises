let readline = require("readline-sync");
console.clear();

let bill = readline.question("What is the bill?")
bill = Number.parseInt(bill, 10);
console.clear();

let percent = readline.question("What is the tip percentage?");
percent = Number.parseInt(percent, 10);
console.clear();

percent = percent / 100;
let tip = bill * percent;
tip = Number.parseFloat(tip, 10);
let total = bill + tip;
total = Number.parseFloat(total, 10);

console.log(`The tip is $${tip.toFixed(2)}
The total is $${total.toFixed(2)}`);


