const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const categoriesRouter = require("./routes/categories");
const errorHandler = require("./middleware/errorHandler"); // 1. Import

app.use(express.json());

app.use("/tasks", tasksRouter);
app.use("/categories", categoriesRouter);

app.use(errorHandler); // 2. Użycie (musi być OSTATNIE)

module.exports = app;
