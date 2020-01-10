const readline = require("readline");

let RL = readline.createInterface(process.stdin, process.stdout);

RL.question("What is your name?", name => {
  console.log(`your name is ${name}`);
  RL.close();
});
