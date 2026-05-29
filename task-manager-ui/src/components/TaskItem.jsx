import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);

  const handleSave = () => {
    if (draftTitle.trim().length === 0) return;
    onUpdate(task.id, { title: draftTitle.trim() });
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setDraftTitle(task.title);
  };

  const handleDeleteClick = () => {
    const confirmDelete = window.confirm(`Czy na pewno chcesz usunąć zadanie: "${task.title}"?`);
    if (confirmDelete) {
      onDelete(task.id);
    }
  };

  if (isEditing) {
    return (
      <li className="task-item">
        <input
          type="text"
          value={draftTitle}
          onChange={(e) => setDraftTitle(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === "Enter") handleSave();
            if (e.key === "Escape") handleCancel();
          }}
          autoFocus
        />
        <button onClick={handleSave}>Zapisz</button>
        <button onClick={handleCancel}>Anuluj</button>
      </li>
    );
  }

return (
    <li 
      className={`task-item ${task.done ? "completed" : ""}`}
      data-priority={task.priority || "medium"}
    >
      <input
        type="checkbox"
        checked={!!task.done}
        onChange={() => onToggle(task.id, !task.done)}
      />
      <span>
        {task.title}{" "}
        {task.category && (
          <small>({task.category})</small>
        )}
      </span>
      <button onClick={() => setIsEditing(true)}>Edytuj</button>
      <button onClick={handleDeleteClick}>
        Usuń
      </button>
    </li>
  );
}

export default TaskItem;