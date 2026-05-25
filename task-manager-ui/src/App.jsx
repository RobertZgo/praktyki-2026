import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { fetchTasks, fetchCategories, createTask, deleteTask, updateTask } from "./services/api";
import "./styles/App.css";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filter, setFilter] = useState("all");
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const [t, c] = await Promise.all([fetchTasks(), fetchCategories()]);
      setTasks(t);
      setCategories(c);
    } catch (err) { console.error(err.message); }
    finally { setLoading(false); }
  };

  useEffect(() => { loadData(); }, []);

  const handleTaskCreated = async (data) => {
    const newTask = await createTask(data);
    setTasks([...tasks, newTask]);
  };

  const handleToggleTask = async (id, done) => {
    const updated = await updateTask(id, { done });
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updated } : t));
  };

  const handleUpdateTask = async (id, data) => {
    const updated = await updateTask(id, data);
    setTasks(tasks.map(t => t.id === id ? { ...t, ...updated } : t));
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Usunąć?")) return;
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
  };

  const filteredTasks = tasks.filter(t => {
    if (filter === "todo") return !t.done;
    if (filter === "done") return t.done;
    return true;
  });

  return (
    <div className="container">
      <Header title="Task Manager" />
      <TaskForm categories={categories} onTaskCreated={handleTaskCreated} />
      
      <div className="stats">
        Zadania: <b>{tasks.length}</b> łącznie | <b>{tasks.filter(t => !t.done).length}</b> do zrobienia
      </div>

      <div className="filters">
        <button className={filter === "all" ? "active" : ""} onClick={() => setFilter("all")}>Wszystkie</button>
        <button className={filter === "todo" ? "active" : ""} onClick={() => setFilter("todo")}>Do zrobienia</button>
        <button className={filter === "done" ? "active" : ""} onClick={() => setFilter("done")}>Wykonane</button>
      </div>

      {loading ? <p>Ładowanie...</p> : 
        <TaskList tasks={filteredTasks} onToggle={handleToggleTask} onDelete={handleDeleteTask} onUpdate={handleUpdateTask} />
      }
    </div>
  );
}

export default App;
