# Scenariusze Testowe — Task Manager

| Nr | Opis | Kroki | Oczekiwany rezultat | Wynik | Uwagi |
|----|------|-------|---------------------|-------|-------|
| 1 | Dodanie zadania | Wpisz "Zadanie 1", wybierz kategorię, kliknij Dodaj | Zadanie pojawia się na liście | | |
| 2 | Wyświetlanie listy | Uruchom aplikację | Lista pobiera dane z bazy MySQL | | |
| 3 | Zmiana statusu | Kliknij checkbox przy zadaniu | Tytuł zostaje przekreślony | | |
| 4 | Edycja tytułu | Kliknij Edytuj, zmień nazwę, kliknij Zapisz | Tytuł zmienia się na liście | | |
| 5 | Anulowanie edycji | Kliknij Edytuj, zmień tekst, kliknij Anuluj | Powrót do starego tytułu | | |
| 6 | Usuwanie zadania | Kliknij Usuń, potwierdź w oknie przeglądarki | Zadanie znika z listy i bazy | | |
| 7 | Walidacja: Pusty tytuł | Zostaw puste pole, kliknij Dodaj | Przycisk jest zablokowany lub błąd 400 | | |
| 8 | Walidacja: Max znaków | Wpisz tekst > 255 znaków, kliknij Dodaj | Komunikat o błędzie (400) | | |
| 9 | Filtr: Do zrobienia | Kliknij przycisk "Do zrobienia" | Widoczne tylko zadania z done=false | | |
| 10 | Filtr: Wykonane | Kliknij przycisk "Wykonane" | Widoczne tylko zadania z done=true | | |
| 11 | Licznik zadań | Dodaj/usuń zadanie | Licznik aktualizuje się poprawnie | | |
| 12 | Persystencja (F5) | Zmień status zadania, odśwież stronę | Status pozostaje zmieniony | | |
| 13 | Specjalne znaki | Wpisz tytuł: `<b>Test</b> 😊`, dodaj | Tekst wyświetla się poprawnie | | |
| 14 | Responsywność | Zmniejsz okno przeglądarki do 400px | Layout układa się pionowo, czytelnie | | |
| 15 | Brak zadań | Usuń wszystkie zadania | Komunikat "Brak zadań" | | |

## Testy międzyprzeglądarkowe
- **Chrome:** (Wpisz OK / Uwagi)
- **Edge:** (Wpisz OK / Uwagi)
- **Firefox:** (Wpisz OK / Uwagi)
