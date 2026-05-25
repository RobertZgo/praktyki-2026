# 📋 Dokumentacja Scenariuszy Testowych — Task Manager

**Projekt:** Task Manager (Fullstack)  
**Tester:** Robert Zgoda 
**Data:** 25.05.2026  
**Środowisko:** Localhost (Frontend: 5173, Backend: 4000), Baza: MySQL

## 1. Testy Funkcjonalne (CRUD)

| Nr | Nazwa testu | Kroki wykonania | Oczekiwany rezultat | Wynik | Uwagi |
|:---|:---|:---|:---|:---:|:---|
| 1.1 | Dodawanie zadania | 1. Wpisz "Zadanie Testowe" <br> 2. Wybierz kategorię "Praca" <br> 3. Kliknij "Dodaj" | Zadanie pojawia się na końcu listy z poprawną nazwą i tagiem (Praca) | | |
| 1.2 | Odczyt listy zadań | 1. Uruchom serwery <br> 2. Odśwież stronę | Aplikacja pobiera i wyświetla wszystkie rekordy z bazy MySQL | | |
| 1.3 | Zmiana statusu (Checkbox) | 1. Kliknij w checkbox przy aktywnym zadaniu | Tytuł zostaje przekreślony, status w bazie zmienia się na `done: 1` | | |
| 1.4 | Edycja tytułu (Inline) | 1. Kliknij "Edytuj" <br> 2. Zmień treść na "Nowy Tytuł" <br> 3. Kliknij "Zapisz" | Tryb edycji znika, na liście widnieje zaktualizowana nazwa | | |
| 1.5 | Anulowanie edycji | 1. Kliknij "Edytuj" <br> 2. Zmień treść <br> 3. Kliknij "Anuluj" | Pole tekstowe znika, przywrócona zostaje pierwotna nazwa zadania | | |
| 1.6 | Usuwanie zadania | 1. Kliknij "Usuń" <br> 2. Potwierdź w oknie dialogowym | Zadanie znika z interfejsu i zostaje trwale usunięte z bazy MySQL | | |

## 2. Walidacja i Bezpieczeństwo

| Nr | Nazwa testu | Kroki wykonania | Oczekiwany rezultat | Wynik | Uwagi |
|:---|:---|:---|:---|:---:|:---|
| 2.1 | Pusty tytuł | 1. Pozostaw pole tekstowe puste <br> 2. Sprawdź przycisk "Dodaj" | Przycisk jest nieaktywny (disabled) | | |
| 2.2 | Tytuł powyżej 255 znaków | 1. Wklej tekst mający 300 znaków <br> 2. Spróbuj dodać zadanie | System wyświetla błąd 400 (Bad Request) lub blokuje wpisywanie | | |
| 2.3 | SQL Injection (Input) | 1. Wpisz w tytule: `'; DROP TABLE tasks; --` <br> 2. Kliknij Dodaj | Zadanie zostaje dodane jako zwykły tekst, baza danych pozostaje nienaruszona | | |

## 3. Filtrowanie i Widok

| Nr | Nazwa testu | Kroki wykonania | Oczekiwany rezultat | Wynik | Uwagi |
|:---|:---|:---|:---|:---:|:---|
| 3.1 | Filtr: Wszystkie | 1. Kliknij przycisk "Wszystkie" | Wyświetlają się wszystkie zadania niezależnie od statusu | | |
| 3.2 | Filtr: Do zrobienia | 1. Kliknij przycisk "Do zrobienia" | Ukrywane są zadania przekreślone (done) | | |
| 3.3 | Filtr: Wykonane | 1. Kliknij przycisk "Wykonane" | Wyświetlane są tylko zadania z zaznaczonym checkboxem | | |
| 3.4 | Licznik zadań | 1. Dodaj 1 zadanie <br> 2. Oznacz 1 jako wykonane | Licznik pokazuje poprawne wartości (np. 1 łącznie | 0 do zrobienia) | | |

## 4. Testy Systemowe i UI

| Nr | Nazwa testu | Kroki wykonania | Oczekiwany rezultat | Wynik | Uwagi |
|:---|:---|:---|:---|:---:|:---|
| 4.1 | Persystencja po odświeżeniu | 1. Zmień status zadania <br> 2. Naciśnij F5 | Po przeładowaniu strony status zadania jest zachowany | | |
| 4.2 | Responsywność (Mobile) | 1. Zmniejsz szerokość okna do 375px (iPhone SE) | Elementy listy i formularza układają się pionowo, brak poziomego paska przewijania | | |

---

### Podsumowanie przeglądarek
- **Google Chrome:** (OK / Błędy)