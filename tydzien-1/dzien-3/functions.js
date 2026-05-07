// --- Wersja klasyczna ---
function greet(name) {
  return "Cześć, " + name + "!";
}

function isEven(number) {
  return number % 2 === 0;
}

function getMax(arr) {
  return Math.max(...arr);
}

function filterPositive(arr) {
  return arr.filter(n => n > 0);
}

// --- Wersja strzałkowa ---
const greetArrow = (name) => `Cześć, ${name}!`;
const isEvenArrow = (number) => number % 2 === 0;
const getMaxArrow = (arr) => Math.max(...arr);
const filterPositiveArrow = (arr) => arr.filter(n => n > 0);

// --- Testy ---
console.log(greet("Robert"));
console.log(greetArrow("Robert"));

console.log(isEven(4));
console.log(isEvenArrow(7));

console.log(getMax([3, 7, 2, 9, 1]));
console.log(getMaxArrow([3, 7, 2, 9, 1]));

console.log(filterPositive([-3, 5, -1, 8, 0, 2]));
console.log(filterPositiveArrow([-3, 5, -1, 8, 0, 2]));
