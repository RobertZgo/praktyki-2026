const express = require("express");
const cors = require("cors"); // 1. DODAJ TO
const app = express();
const tasksRouter = require("./routes/tasks");
const categoriesRouter = require("./routes/categories");

app.use(cors()); // 2. DODAJ TO (przed app.use(express.json()))
app.use(express.json());
app.use("/tasks", tasksRouter);
app.use("/categories", categoriesRouter);

module.exports = app;
