# Task Manager Fullstack

Prosta aplikacja do zarządzania zadaniami pozwalająca na tworzenie, edycję, usuwanie oraz filtrowanie zadań z podziałem na kategorie. Projekt został stworzony w ramach praktyk zawodowych.

##  Technologie
- **Frontend:** React (Vite), CSS3
- **Backend:** Node.js, Express.js
- **Baza danych:** MySQL (MariaDB)
- **Narzędzia:** ESLint, Prettier, Dotenv

##  Wymagania
- Node.js (v18+)
- MySQL / XAMPP
- npm

##  Instalacja i uruchomienie

### 1. Baza danych
1. Uruchom MySQL w panelu XAMPP.
2. Utwórz bazę danych `task_manager`.
3. Zaimportuj strukturę z pliku `task-manager-api/db/schema.sql`.

### 2. Backend
1. Wejdź do katalogu: `cd c:\Praktyki\tydzien-1\dzien-5\task-manager-api`.
2. Zainstaluj paczki: `npm install`.
3. Skopiuj plik `.env.example` jako `.env` i uzupełnij dane do bazy.
4. Uruchom serwer: `npm run dev`.
   - Serwer będzie dostępny pod adresem: `http://localhost:4000`.

### 3. Frontend
1. Wejdź do katalogu: `c:\Praktyki\task-manager-ui`.
2. Zainstaluj paczki: `npm install`.
3. Uruchom aplikację: `npm run dev`.
   - Aplikacja będzie dostępna pod adresem: `http://localhost:5173`.

##  Struktura projektu
```text
praktyki/
├──tydzien-1
│       ├── dzien-5\task-manager-api/       # Backend (Node + Express)
│       ├── controllers/        # Logika biznesowa
│       ├── db/                 # Konfiguracja bazy i schema.sql
│       ├── middleware/         # Obsługa błędów i CORS
│       └── routes/             # Definicje endpointów
├── task-manager-ui/        # Frontend (React)
│   ├── src/
│   │   ├── components/     # Komponenty UI
│   │   ├── services/       # Komunikacja z API
│   │   └── styles/         # Style CSS
└── docs/                   # Dokumentacja i testy

### Autor
ROBZGO — Creator

Data praktyk: Maj 2026