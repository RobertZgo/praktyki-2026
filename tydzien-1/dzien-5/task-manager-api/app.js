const express = require("express");
const app = express();
const tasksRouter = require("./routes/tasks");
const categoriesRouter = require("./routes/categories");

app.use(express.json());
app.use("/tasks", tasksRouter);
app.use("/categories", categoriesRouter);

module.exports = app;
