import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import {
  fetchTasks,
  fetchCategories,
  createTask,
  deleteTask,
  updateTask,
} from "./services/api";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Przenosimy loadData tutaj, żeby linter nie sypał błędami
  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);
        const [tasksData, categoriesData] = await Promise.all([
          fetchTasks(),
          fetchCategories(),
        ]);
        setTasks(tasksData);
        setCategories(categoriesData);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  const handleTaskCreated = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks([...tasks, newTask]);
    } catch (err) {
      alert(err.message);
    }
  };

  const handleToggleTask = async (id, done) => {
    try {
      const updated = await updateTask(id, { done });
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleUpdateTask = async (id, data) => {
    try {
      const updated = await updateTask(id, data);
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    } catch (err) {
      alert(err.message);
    }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Na pewno usunąć?")) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) {
      alert(err.message);
    }
  };

  const filteredTasks = tasks.filter((t) => {
    if (filter === "todo") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  const stats = {
    total: tasks.length,
    todo: tasks.filter((t) => !t.done).length,
    done: tasks.filter((t) => t.done).length,
  };

  return (
    <div className="container">
      <Header title="Task Manager" />
      <TaskForm categories={categories} onTaskCreated={handleTaskCreated} />

      <div className="stats">
        Zadania: <b>{stats.total}</b> łącznie | <b>{stats.todo}</b> do zrobienia
        | <b>{stats.done}</b> wykonane
      </div>

      <div className="filters">
        <button
          className={filter === "all" ? "active" : ""}
          onClick={() => setFilter("all")}
        >
          Wszystkie
        </button>
        <button
          className={filter === "todo" ? "active" : ""}
          onClick={() => setFilter("todo")}
        >
          Do zrobienia
        </button>
        <button
          className={filter === "done" ? "active" : ""}
          onClick={() => setFilter("done")}
        >
          Wykonane
        </button>
      </div>

      {loading ? (
        <div className="loader"></div>
      ) : (
        <TaskList
          tasks={filteredTasks}
          onToggle={handleToggleTask}
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        />
      )}

      {error && (
        <p style={{ color: "red", textAlign: "center", marginTop: "20px" }}>
          ⚠️ Problem z połączeniem. Upewnij się, że serwer i baza danych są
          włączone.
        </p>
      )}
    </div>
  );
}

export default App;
