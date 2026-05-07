const zadania = [
  { id: 1, title: "Nauczyć się Git", done: true },
  { id: 2, title: "Zrobić moduły Node.js", done: true },
  { id: 3, title: "Poznać metody tablicowe", done: false },
  { id: 4, title: "Zrobić projekt końcowy", done: false },
];

// map — tablica samych tytułów
const tytuly = zadania.map(z => z.title);
console.log("Tytuły:", tytuly);

// filter — niezrobione zadania
const niezrobione = zadania.filter(z => !z.done);
console.log("Niezrobione:", niezrobione);

// find — zadanie o konkretnym id
const znalezione = zadania.find(z => z.id === 2);
console.log("Znalezione (id=2):", znalezione);

// some — czy jakiekolwiek zadanie jest zrobione
const czyJakieszrobione = zadania.some(z => z.done);
console.log("Czy jakieś zrobione?", czyJakieszrobione);

// forEach — wypisz każde zadanie
zadania.forEach(z => {
  const status = z.done ? "[x]" : "[ ]";
  console.log(`${status} ${z.title}`);
});
