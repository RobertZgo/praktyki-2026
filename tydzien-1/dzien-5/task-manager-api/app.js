const express = require("express");
const cors = require("cors");
require("dotenv").config();

const pool = require("./db"); // Pobieramy połączenie z bazą
const tasksRoutes = require("./routes/tasks");
const categoriesRoutes = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler");

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());

// Automatyczna migracja bazy danych przy starcie
const setupDatabase = async () => {
  try {
    // Sprawdzamy, czy kolumna priority już istnieje
    const [columns] = await pool.query("SHOW COLUMNS FROM tasks LIKE 'priority'");
    
    if (columns.length === 0) {
      console.log("Brak kolumny 'priority'. Dodaję kolumnę do tabeli tasks...");
      await pool.query("ALTER TABLE tasks ADD COLUMN priority VARCHAR(10) DEFAULT 'medium'");
      console.log("Kolumna 'priority' została pomyślnie dodana!");
    } else {
      console.log("Kolumna 'priority' już istnieje w bazie danych.");
    }
  } catch (err) {
    console.error("Błąd podczas automatycznej migracji bazy danych:", err.message);
  }
};

// Główne ścieżki API
app.use("/api/tasks", tasksRoutes);
app.use("/api/categories", categoriesRoutes);

// Obsługa błędów
app.use(errorHandler);

// Uruchamiamy migrację, a potem podnosimy serwer
setupDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`SERWER DZIALA NA PORCIE: ${PORT}`);
  });
});