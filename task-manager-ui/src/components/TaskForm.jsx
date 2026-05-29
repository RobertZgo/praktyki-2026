import { useState } from "react";

function TaskForm({ onAddTask }) {
  const [title, setTitle] = useState("");
  const [priority, setPriority] = useState("medium");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) return;

    try {
      await onAddTask({
        title: title.trim(),
        priority: priority,
      });
      setTitle("");
      setPriority("medium");
    } catch (err) {
      console.error("Blad podczas dodawania zadania w formularzu:", err);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <div className="form-group">
        <label>NAZWA ZADANIA</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Co jest do zrobienia?"
        />
      </div>

      <div className="form-group">
        <label>PRIORYTET</label>
        <select value={priority} onChange={(e) => setPriority(e.target.value)}>
          <option value="low">Niski (Low)</option>
          <option value="medium">Średni (Medium)</option>
          <option value="high">Wysoki (High)</option>
        </select>
      </div>

      <button type="submit" className="btn-submit">
        Dodaj zadanie
      </button>
    </form>
  );
}

export default TaskForm;