const express = require("express");
const cors = require("cors");
const app = express();

// CORS musi być na samej górze, przed wszystkimi innymi app.use!
app.use(cors());
app.use(express.json());

// Importy routerów
const tasksRouter = require("./routes/tasks");
const categoriesRouter = require("./routes/categories");

// Podpięcie tras
app.use("/tasks", tasksRouter);
app.use("/categories", categoriesRouter);

// Handler błędów
const errorHandler = require("./middleware/errorHandler");
app.use(errorHandler);

module.exports = app;
