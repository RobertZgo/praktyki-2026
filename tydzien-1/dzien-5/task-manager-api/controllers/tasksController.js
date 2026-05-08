const tasks = require("../data/tasks");

const getAllTasks = (req, res) => {
  res.json(tasks);
};

const getTaskById = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Nie znaleziono zadania" });
  res.json(task);
};

const createTask = (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).json({ error: "Tytuł jest wymagany" });
  const newTask = { id: tasks.length + 1, title, done: false };
  tasks.push(newTask);
  res.status(201).json(newTask);
};

const updateTask = (req, res) => {
  const task = tasks.find((t) => t.id === parseInt(req.params.id));
  if (!task) return res.status(404).json({ error: "Nie znaleziono zadania" });
  if (req.body.title !== undefined) task.title = req.body.title;
  if (req.body.done !== undefined) task.done = req.body.done;
  res.json(task);
};

const deleteTask = (req, res) => {
  const index = tasks.findIndex((t) => t.id === parseInt(req.params.id));
  if (index === -1) return res.status(404).json({ error: "Nie znaleziono zadania" });
  tasks.splice(index, 1);
  res.sendStatus(204);
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
