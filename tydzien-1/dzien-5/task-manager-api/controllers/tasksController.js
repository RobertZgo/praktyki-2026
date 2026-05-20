const pool = require("../db");

const getAllTasks = async (req, res, next) => {
  try {
    const [rows] = await pool.query(
      `SELECT t.*, c.name AS category 
       FROM tasks t 
       LEFT JOIN categories c ON t.category_id = c.id 
       ORDER BY t.id`
    );
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

const getTaskById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (isNaN(id)) return res.status(400).json({ error: "ID musi być liczbą" });
    const [rows] = await pool.query(
      `SELECT t.*, c.name AS category 
       FROM tasks t 
       LEFT JOIN categories c ON t.category_id = c.id 
       WHERE t.id = ?`,
      [id]
    );
    if (rows.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

const createTask = async (req, res, next) => {
  try {
    const { title, category_id } = req.body;
    if (!title || title.trim().length === 0) {
      return res.status(400).json({ error: "Tytuł jest wymagany" });
    }
    const [result] = await pool.query(
      "INSERT INTO tasks (title, category_id) VALUES (?, ?)",
      [title.trim(), category_id || null]
    );
    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    next(err);
  }
};

const updateTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const { title, done, category_id } = req.body;
    const [existing] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    if (existing.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });

    if (title !== undefined) await pool.query("UPDATE tasks SET title = ? WHERE id = ?", [title, id]);
    if (done !== undefined) await pool.query("UPDATE tasks SET done = ? WHERE id = ?", [done, id]);
    if (category_id !== undefined) await pool.query("UPDATE tasks SET category_id = ? WHERE id = ?", [category_id, id]);

    const [rows] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    res.json(rows[0]);
  } catch (err) {
    next(err);
  }
};

const deleteTask = async (req, res, next) => {
  try {
    const { id } = req.params;
    const [existing] = await pool.query("SELECT * FROM tasks WHERE id = ?", [id]);
    if (existing.length === 0) return res.status(404).json({ error: "Nie znaleziono zadania" });
    await pool.query("DELETE FROM tasks WHERE id = ?", [id]);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
};

module.exports = { getAllTasks, getTaskById, createTask, updateTask, deleteTask };
