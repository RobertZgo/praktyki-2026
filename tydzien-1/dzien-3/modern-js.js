// --- Destrukturyzacja obiektu ---
const zadanie = { id: 1, title: "Nauczyć się Git", done: true };
const { title, done } = zadanie; // wyciągamy title i done z obiektu
console.log(title); // Nauczyć się Git
console.log(done);  // true

// --- Destrukturyzacja tablicy ---
const liczby = [10, 20, 30, 40, 50];
const [pierwsza, ...reszta] = liczby; // pierwszy element + reszta
console.log(pierwsza); // 10
console.log(reszta);   // [20, 30, 40, 50]

// --- Spread — kopiowanie tablicy ---
const oryginał = [1, 2, 3];
const kopia = [...oryginał]; // spread tworzy nową tablicę
kopia.push(4);
console.log(oryginał); // [1, 2, 3] — oryginał niezmieniony
console.log(kopia);    // [1, 2, 3, 4]

// --- Spread — łączenie tablic ---
const a = [1, 2, 3];
const b = [4, 5, 6];
const połączone = [...a, ...b];
console.log(połączone); // [1, 2, 3, 4, 5, 6]

// --- Spread — łączenie obiektów ---
const podstawowe = { imie: "Robert", wiek: 20 };
const dodatkowe = { miasto: "Warszawa", hobby: "kod" };
const pełneInfo = { ...podstawowe, ...dodatkowe };
console.log(pełneInfo);

// --- Template literals ---
const imie = "Robert";
const wiek = 17;
console.log(`Cześć, mam na imię ${imie} i mam ${wiek} lat!`);
