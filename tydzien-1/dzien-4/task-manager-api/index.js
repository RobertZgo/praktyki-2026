const express = require("express");
const app = express();
const PORT = 3000;

// Middleware do parsowania JSON
app.use(express.json());

// Tablica zadań w pamięci
let tasks = [
  { id: 1, title: "Nauczyć się Express", done: false },
  { id: 2, title: "Zbudować API", done: false },
  { id: 3, title: "Przetestować endpointy", done: false },
];

// GET / — powitanie
app.get("/", (req, res) => {
  res.json({ message: "Witaj w Task Manager API!" });
});

// GET /tasks — lista wszystkich zadań
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// GET /tasks/:id — jedno zadanie po id
app.get("/tasks/:id", (req, res) => {
  const task = tasks.find(t => t.id === Number(req.params.id));
  if (!task) {
    return res.status(404).json({ error: "Zadanie nie istnieje" });
  }
  res.json(task);
});

// POST /tasks — dodaj nowe zadanie
app.post("/tasks", (req, res) => {
  const { title } = req.body;
  const newTask = {
    id: Math.max(...tasks.map(t => t.id)) + 1,
    title,
    done: false,
  };
  tasks.push(newTask);
  res.status(201).json(newTask);
});

// Start serwera
app.listen(PORT, () => {
  console.log(`Serwer działa na http://localhost:${PORT}`);
});
