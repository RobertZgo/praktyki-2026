import { useState, useEffect } from "react";
import Header from "./components/Header";
import TaskList from "./components/TaskList";
import { fetchTasks } from "./services/api";

function App() {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getTasks = async () => {
      try {
        const data = await fetchTasks();
        setTasks(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getTasks();
  }, []);

  return (
    <div>
      <Header title="Task Manager" />
      {loading && <p>Ładowanie zadań...</p>}
      {error && <p style={{ color: "red" }}>Błąd: {error}</p>}
      {!loading && !error && <TaskList tasks={tasks} />}
    </div>
  );
}

export default App;
