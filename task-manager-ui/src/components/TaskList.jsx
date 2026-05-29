import TaskItem from "./TaskItem";

function TaskList({ tasks, onToggle, onUpdateTask, onDeleteTask }) {
  return (
    <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          onToggle={onToggle}
          onDelete={onDeleteTask}
          onUpdate={onUpdateTask}
        />
      ))}
    </ul>
  );
}

export default TaskList;