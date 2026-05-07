// Zadanie 3.1 — Zmienne i typy danych

const imie = "Robert";        // string
let wiek = 20;                 // number
const czyStudent = true;       // boolean
let oceny = [5, 4, 3, 5];     // array
const osoba = { imie: "Robert", wiek: 20 }; // object

console.log(typeof imie);       // string
console.log(typeof wiek);       // number
console.log(typeof czyStudent); // boolean
console.log(typeof oceny);      // object (tak działa typeof dla tablic!)
console.log(typeof osoba);      // object

// let vs const:
// let — można zmienić wartość zmiennej po jej zadeklarowaniu
// const — nie można przypisać nowej wartości, ale można modyfikować
//         zawartość obiektu/tablicy (bo const chroni referencję, nie zawartość)

// Przykład — const nie chroni zawartości obiektu:
osoba.wiek = 21; // to działa!
console.log(osoba); // { imie: 'Robert', wiek: 21 }
