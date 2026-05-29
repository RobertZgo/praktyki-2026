import { useState } from "react";

function TaskForm({ categories, onTaskCreated }) {
  const [title, setTitle] = useState("");
  const [categoryId, setCategoryId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim().length === 0) return;

    onTaskCreated({
      title: title.trim(),
      category_id: categoryId === "" ? null : Number(categoryId),
    });

    setTitle("");
    setCategoryId("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{ marginBottom: "20px", display: "flex", gap: "10px" }}
    >
      <input
        type="text"
        placeholder="Co jest do zrobienia?"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        autoFocus
        required
      />

      <select
        value={categoryId}
        onChange={(e) => setCategoryId(e.target.value)}
      >
        <option value="">-- Bez kategorii --</option>
        {categories.map((cat) => (
          <option key={cat.id} value={cat.id}>
            {cat.name}
          </option>
        ))}
      </select>

      <button type="submit" disabled={title.trim().length === 0}>
        Dodaj
      </button>
    </form>
  );
}

export default TaskForm;
