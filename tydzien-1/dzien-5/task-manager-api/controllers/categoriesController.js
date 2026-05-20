const pool = require("../db");

const getAllCategories = async (req, res, next) => {
  try {
    const [rows] = await pool.query("SELECT * FROM categories ORDER BY id");
    res.json(rows);
  } catch (err) {
    next(err);
  }
};

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) return res.status(400).json({ error: "Nazwa jest wymagana" });
    const [result] = await pool.query("INSERT INTO categories (name) VALUES (?)", [name]);
    const [rows] = await pool.query("SELECT * FROM categories WHERE id = ?", [result.insertId]);
    res.status(201).json(rows[0]);
  } catch (err) {
    if (err.code === "ER_DUP_ENTRY") {
      return res.status(409).json({ error: "Kategoria o tej nazwie już istnieje" });
    }
    next(err);
  }
};

module.exports = { getAllCategories, createCategory };
