const pool = require("../db");

const getAllTasks = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.*, c.name AS category 
       FROM tasks t 
       LEFT JOIN categories c ON t.category_id = c.id 
       ORDER BY t.id`
    );
    res.json(rows);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const getTaskById = async (req, res) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.*, c.name AS category 
       FROM tasks t 
       LEFT JOIN categories c ON t.category_id = c.id 
       WHERE t.id = ?`,
      [req.params.id]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const createTask = async (req, res) => {
  try {
    const { title } = req.body;
    if (!title) return res.status(400).json({ error: "Tytuł jest wymagany" });
    const [result] = await pool.query(
      "INSERT INTO tasks (title) VALUES (?)",
      [title]
    );
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const updateTask = async (req, res) => {
  try {
    const { title, done } = req.body;
    const [existing] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    if (existing.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });
    if (title !== undefined) await pool.query("UPDATE tasks SET title = ? WHERE id = ?", [title, req.params.id]);
    if (done !== undefined) await pool.query("UPDATE tasks SET done = ? WHERE id = ?", [done, req.params.id]);
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    res.json(rows[0]);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

const deleteTask = async (req, res) => {
  try {
    const [existing] = await pool.query("SELECT * FROM tasks WHERE id = ?", [req.params.id]);
    if (existing.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });
    await pool.query("DELETE FROM tasks WHERE id = ?", [req.params.id]);
    res.sendStatus(204);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
