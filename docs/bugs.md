#  Raport Błędów i Usterek

### BUG-001: Brak automatycznego zawijania długich nazw
- **Priorytet:** Średni (Medium)
- **Środowisko:** Wszystkie przeglądarki
- **Opis:** Wpisanie bardzo długiego słowa bez spacji powoduje "rozjechanie się" kontenera aplikacji.
- **Kroki do reprodukcji:**
  1. Uruchom aplikację.
  2. W polu "Co jest do zrobienia?" wpisz 100 razy literę 'W'.
  3. Kliknij "Dodaj".
- **Oczekiwany rezultat:** Tekst powinien zostać przełamany do nowej linii (`word-break: break-all`).
- **Aktualny rezultat:** Tekst wychodzi poza białą ramkę kontenera.
- **Status:** Zgłoszony

---

### BUG-002: Walidacja samych spacji w tytule
- **Priorytet:** Niski (Low)
- **Środowisko:** Wszystkie przeglądarki
- **Opis:** Aplikacja pozwala na dodanie zadania, które składa się wyłącznie ze znaków spacji.
- **Kroki do reprodukcji:**
  1. Kliknij w pole tekstowe.
  2. Wciśnij spację 5 razy.
  3. Kliknij "Dodaj".
- **Oczekiwany rezultat:** Przycisk "Dodaj" powinien być zablokowany lub powinien pojawić się komunikat o błędzie.
- **Aktualny rezultat:** Na liście pojawia się puste zadanie.
- **Status:** Zgłoszony

---

### BUG-003: Brak komunikatu przy braku połączenia z bazą
- **Priorytet:** Wysoki (High)
- **Środowisko:** Frontend
- **Opis:** Gdy serwer MySQL jest wyłączony, użytkownik widzi tylko techniczny komunikat "Failed to fetch".
- **Kroki do reprodukcji:**
  1. Wyłącz MySQL w XAMPP.
  2. Odśwież stronę aplikacji.
- **Oczekiwany rezultat:** Czytelna informacja dla użytkownika: "Problem z serwerem, spróbuj później".
- **Aktualny rezultat:** Czerwony napis "Błąd: Failed to fetch".
- **Status:** Zgłoszony
