import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import TaskForm from "./components/TaskForm";
import { fetchTasks, fetchCategories, createTask } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const [tasksData, categoriesData] = await Promise.all([
          fetchTasks(),
          fetchCategories()
        ]);
        setTasks(tasksData);
        setCategories(categoriesData);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  const handleTaskCreated = async (taskData) => {
    try {
      const newTask = await createTask(taskData);
      setTasks([...tasks, newTask]);
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "0 auto", padding: "20px" }}>
      <Header title="Task Manager" />
      
      <TaskForm categories={categories} onTaskCreated={handleTaskCreated} />

      {loading && <p>Ładowanie...</p>}
      {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      
      {!loading && !error && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
