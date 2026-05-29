import { useState } from "react";
import { useTasks } from "./hooks/useTasks";
import './styles/app.css';
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import Header from "./components/Header";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("date"); 

    const { tasks, loading, error, addTask, updateTask, deleteTask } = useTasks(searchTerm);

    const getSortedTasks = () => {
        const tasksCopy = [...tasks];
        
        if (sortBy === "title") {
            return tasksCopy.sort((a, b) => a.title.localeCompare(b.title));
        }
        if (sortBy === "status") {
            return tasksCopy.sort((a, b) => a.done - b.done);
        }
        return tasksCopy.sort((a, b) => b.id - a.id);
    };

    const sortedTasks = getSortedTasks();

    return (
        <div className="container">
            <Header />
            
            <TaskForm onAddTask={addTask} />

            <div className="search-sort-group">
                <input
                    type="text"
                    placeholder="Wyszukaj zadanie..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <select
                    value={sortBy}
                    onChange={(e) => setSortBy(e.target.value)}
                >
                    <option value="date">Sortuj po: dacie utworzenia</option>
                    <option value="title">Sortuj po: tytule</option>
                    <option value="status">Sortuj po: statusie</option>
                </select>
            </div>

            {loading && <div className="loader"></div>}
            {error && <p style={{ color: "var(--danger)", textAlign: "center" }}>Błąd: {error}</p>}

            {!loading && !error && (
               <TaskList 
                   tasks={sortedTasks} 
                    onToggle={(id, newDoneState) => updateTask(id, { done: newDoneState })} 
                    onUpdateTask={updateTask} 
                    onDeleteTask={deleteTask} 
/>
            )}
        </div>
    );
}

export default App;