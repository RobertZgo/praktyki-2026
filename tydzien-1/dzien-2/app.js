const { add, subtract, multiply } = require("./math");
const chalk = require("chalk");

console.log(chalk.blue("Dodawanie 5 + 3 ="), chalk.green(add(5, 3)));
console.log(chalk.blue("Odejmowanie 10 - 4 ="), chalk.green(subtract(10, 4)));
console.log(chalk.blue("Mnożenie 6 * 7 ="), chalk.green(multiply(6, 7)));
