# Dokumentacja API — Task Manager

Adres bazowy: `http://localhost:4000`

## Zadania (/tasks)
- **GET /tasks** — Pobiera wszystkie zadania.
- **GET /tasks/:id** — Pobiera jedno zadanie po ID.
- **POST /tasks** — Dodaje zadanie. Body: `{"title": "Nazwa", "category_id": 1}`.
- **PUT /tasks/:id** — Edytuje zadanie. Body: `{"title": "Nowa", "done": true}`.
- **DELETE /tasks/:id** — Usuwa zadanie.

## Kategorie (/categories)
- **GET /categories** — Lista wszystkich kategorii.
- **POST /categories** — Dodaje kategorię. Body: `{"name": "Nowa"}`.

## Błędy
Wszystkie błędy zwracają format: `{"error": "Treść błędu"}`.
