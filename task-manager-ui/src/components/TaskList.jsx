import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onDelete, onUpdate }) {
  if (tasks.length === 0) return <p>Brak zadań.</p>;

  return (
    <ul style={{ listStyle: "none", padding: 0 }}>
      {tasks.map((task) => (
        <TaskItem 
          key={task.id} 
          task={task} 
          onToggle={onToggle} 
          onDelete={onDelete}
          onUpdate={onUpdate}
        />
      ))}
    </ul>
  );
}

export default TaskList;
