import { useState } from "react";

function TaskItem({ task, onToggle, onDelete, onUpdate }) {
  const [isEditing, setIsEditing] = useState(false);
  const [draftTitle, setDraftTitle] = useState(task.title);

  const handleSave = () => {
    if (draftTitle.trim().length === 0) return;
    onUpdate(task.id, { title: draftTitle.trim() });
    setIsEditing(false);
  };

  if (isEditing) {
    return (
      <li style={{ marginBottom: "8px", display: "flex", gap: "10px" }}>
        <input 
          type="text" 
          value={draftTitle} 
          onChange={(e) => setDraftTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSave()}
        />
        <button onClick={handleSave}>Zapisz</button>
        <button onClick={() => { setIsEditing(false); setDraftTitle(task.title); }}>Anuluj</button>
      </li>
    );
  }

  return (
    <li style={{ 
      display: "flex", 
      alignItems: "center", 
      gap: "10px", 
      marginBottom: "8px",
      textDecoration: task.done ? "line-through" : "none" 
    }}>
      <input 
        type="checkbox" 
        checked={!!task.done} 
        onChange={() => onToggle(task.id, !task.done)} 
      />
      
      <span style={{ flexGrow: 1 }}>
        {task.title} {task.category && <small style={{ color: "#666" }}>({task.category})</small>}
      </span>

      <button onClick={() => setIsEditing(true)}>Edytuj</button>
      <button onClick={() => onDelete(task.id)} style={{ color: "red" }}>Usuń</button>
    </li>
  );
}

export default TaskItem;
