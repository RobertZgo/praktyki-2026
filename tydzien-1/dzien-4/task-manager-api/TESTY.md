# Testy API

## GET /
- **Wynik:** 200 OK
- **Response:** `{"message": "Witaj w Task Manager API!"}`

## GET /tasks
- **Wynik:** 200 OK
- **Response:** tablica wszystkich zadań

## GET /tasks/1
- **Wynik:** 200 OK
- **Response:** `{"id":1,"title":"Nauczyć się Express","done":false}`

## GET /tasks/999
- **Wynik:** 404 Not Found
- **Response:** `{"error": "Zadanie nie istnieje"}`

## POST /tasks
- **Body:** `{"title": "Nowe zadanie testowe"}`
- **Wynik:** 201 Created
- **Response:** `{"id":4,"title":"Nowe zadanie testowe","done":false}`
