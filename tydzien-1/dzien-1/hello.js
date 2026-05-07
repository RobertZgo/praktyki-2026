console.log("Hello, World!");

const now = new Date();
console.log("Aktualna data i godzina:", now.toLocaleString());

const imie = process.argv[2];

if (imie) {
  console.log(`Cześć, ${imie}!`);
} else {
  console.log("Nie podano imienia.");
}
