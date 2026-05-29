# Testowanie CRUD — Dzień 5

## GET /tasks

- Żądanie: GET http://localhost:3000/tasks
- Oczekiwany status: 200 OK
- Wynik: zwrócona lista zadań w JSON

## POST /tasks

- Żądanie: POST http://localhost:3000/tasks
- Body: { "title": "Nowe zadanie" }
- Oczekiwany status: 201 Created
- Wynik: zwrócone nowe zadanie z id

## GET /tasks/:id

- Żądanie: GET http://localhost:3000/tasks/1
- Oczekiwany status: 200 OK
- Wynik: zwrócone pojedyncze zadanie

## PUT /tasks/:id

- Żądanie: PUT http://localhost:3000/tasks/1
- Body: { "title": "Zaktualizowane zadanie", "done": true }
- Oczekiwany status: 200 OK
- Wynik: zwrócone zaktualizowane zadanie

## DELETE /tasks/:id

- Żądanie: DELETE http://localhost:3000/tasks/1
- Oczekiwany status: 204 No Content
- Wynik: pusta odpowiedź, zadanie usunięte

//{
// "title": "Zaktualizowane zadanie",
// "done": true
//}
