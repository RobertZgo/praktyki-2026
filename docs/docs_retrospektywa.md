# Retrospektywa - Projekt Task Manager
**Data:** 29.05.2026  

### 1. Co zmieniłbym w strukturze kodu/projektu z perspektywy czasu?
* **Automatyzacja bazy danych od początku:** Zamiast ręcznie tworzyć i modyfikować tabele w bazie danych (np. zapomniana kolumna `priority`), od pierwszego dnia wdrożyłbym skrypty automatycznej migracji w kodzie backendu (tak jak funkcja `setupDatabase` w `app.js`).
* **Punkt startowy serwera:** Zamiast domyślnego pliku `index.js`, od razu konsekwentnie używałbym struktury zorientowanej na `app.js` lub poprawnie skonfigurował skrypty startowe w `package.json`, aby uniknąć konfliktów z narzędziem Nodemon.
* **Wspólne uruchamianie (Monorepo):** Konfigurację narzędzia `concurrently` do jednoczesnego odpalania frontendu i backendu przygotowałbym na samym początku pracy, co oszczędziłoby mnóstwo czasu spędzonego na skakaniu między terminalami.

### 2. Jakich błędów bym uniknął?
* **Ignorowanie ostrzeżeń lintera:** Na początku traktowałem ostrzeżenia ESLinta jako mało istotne, co doprowadziło do zablokowania budowania aplikacji przez puste bloki `catch` i nieużywane zmienne. Teraz wiem, że czysty kod według reguł lintera to podstawa.
* **Błędy składniowe w plikach konfiguracyjnych:** Unikałbym pośpiechu przy edycji plików `package.json`. Jeden brakujący lub nadmiarowy przecinek potrafi unieruchomić cały menedżer pakietów przez błędy parsowania JSON.

### 3. Co mi się podobało w tej pracy?
* **Architektura Full-Stack:** Niezwykle satysfakcjonujące było połączenie wszystkich trzech warstw aplikacji w jeden, płynnie działający organizm (React wysyła żądanie -> Express przetwarza -> MySQL zapisuje).
* **Automatyzacja procesów:** Moment, w którym cała aplikacja (frontend, backend oraz weryfikacja bazy danych) zaczęła uruchamiać się za pomocą jednej komendy `npm run dev` w głównym katalogu.
* **Proces debugowania:** Choć błędy bywały frustrujące, ich ostateczne namierzenie i naprawienie dało mi ogromną dawkę praktycznej wiedzy, której nie zdobędzie się z samych poradników.

### 4. Czego zabrakło / co chciałbym pogłębić?
* **Testy automatyczne:** Chciałbym dowiedzieć się, jak pisać testy jednostkowe dla backendu (np. za pomocą Jest) oraz testy komponentów w React, aby automatycznie wykrywać błędy regresji.
* **Zaawansowane SQL / ORM:** Chętnie pogłębiłbym wiedzę z zakresu relacji w bazach danych (klucze obce) oraz spróbował pracy z ORM, takim jak Sequelize lub Prisma, zamiast pisania surowych zapytań SQL w kodzie Node.js.
