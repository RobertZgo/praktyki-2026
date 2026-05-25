# Raport błędów (Bugs)

### BUG-001: Tekst zadania wychodzi poza kontener
- **Priorytet:** Średni
- **Kroki:** 
  1. Wpisz bardzo długi tytuł bez spacji (np. 100x litera 'a').
  2. Kliknij Dodaj.
- **Oczekiwany rezultat:** Tekst zawija się do nowej linii.
- **Aktualny rezultat:** Tekst rozciąga kontener i wychodzi poza ekran.
- **Status:** Zgłoszony

### BUG-002: Brak walidacji spacji
- **Priorytet:** Niski
- **Kroki:**
  1. Wpisz same spacje w pole tytułu.
  2. Kliknij Dodaj.
- **Oczekiwany rezultat:** Błąd walidacji "Tytuł nie może być pusty".
- **Aktualny rezultat:** Dodaje "puste" zadanie na listę.
- **Status:** Zgłoszony
