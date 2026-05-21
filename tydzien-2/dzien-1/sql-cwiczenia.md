# Ćwiczenia SQL — Dzień 1

## 1. Policz wszystkie zadania
SELECT COUNT(*) FROM tasks;
-- Wynik: 2

## 2. Zadania z "SQL" w tytule
SELECT * FROM tasks WHERE title LIKE '%SQL%';
-- Wynik: zwrócił 2 rekordy (oba zawierają "SQL")

## 3. Ostatnie 5 najnowszych
SELECT * FROM tasks ORDER BY created_at DESC LIMIT 5;
-- Wynik: zwrócił 2 rekordy posortowane od najnowszego

## 4. Próba dodania bez tytułu
INSERT INTO tasks (title) VALUES (NULL);
-- Wynik: ERROR 1048 - Column 'title' cannot be null
-- Dlaczego: kolumna title ma NOT NULL, MySQL nie pozwala na puste wartości

## 5. Zrobione i niezrobione
SELECT done, COUNT(*) FROM tasks GROUP BY done;
-- Wynik: done=0 → 1 zadanie, done=1 → 1 zadanie