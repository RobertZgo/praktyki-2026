import Header from "./components/Header";
import TaskList from "./components/TaskList";

function App() {
  const testTasks = [
    { id: 1, title: "Nauczyć się Reacta", done: false, category: "Nauka" },
    { id: 2, title: "Zrobić zakupy", done: true, category: "Dom" },
    { id: 3, title: "Wypchnąć kod na Git", done: false },
  ];

  return (
    <div>
      <Header title="Task Manager" />
      <TaskList tasks={testTasks} />
    </div>
  );
}

export default App;
