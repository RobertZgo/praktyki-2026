import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { fetchTasks, fetchCategories, createTask, deleteTask, updateTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        const [tasksData, categoriesData] = await Promise.all([fetchTasks(), fetchCategories()]);
        setTasks(tasksData);
        setCategories(categoriesData);
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
    } catch (err) { alert(err.message); }
  };

  const handleToggleTask = async (id, done) => {
    try {
      const updated = await updateTask(id, { done });
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    } catch (err) { alert(err.message); }
  };

  const handleUpdateTask = async (id, data) => {
    try {
      const updated = await updateTask(id, data);
      setTasks(tasks.map((t) => (t.id === id ? { ...t, ...updated } : t)));
    } catch (err) { alert(err.message); }
  };

  const handleDeleteTask = async (id) => {
    if (!window.confirm("Na pewno usunąć to zadanie?")) return;
    try {
      await deleteTask(id);
      setTasks(tasks.filter((t) => t.id !== id));
    } catch (err) { alert(err.message); }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px", fontFamily: "sans-serif" }}>
      <Header title="Task Manager" />
      <TaskForm categories={categories} onTaskCreated={handleTaskCreated} />
      {loading && <p>Ładowanie...</p>}
      {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      {!loading && !error && (
        <TaskList 
          tasks={tasks} 
          onToggle={handleToggleTask} 
          onDelete={handleDeleteTask}
          onUpdate={handleUpdateTask}
        />
      )}
    </div>
  );
}

export default App;
