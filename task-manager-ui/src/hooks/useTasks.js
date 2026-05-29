import { useState, useEffect } from "react";

const API_URL = "http://localhost:4000/api/tasks";

export const useTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Funkcja odświeżania listy (potrzebna na zewnątrz)
  const refetch = async () => {
    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error("Nie udało się pobrać zadań");
      const data = await res.json();
      setTasks(data);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Błąd pobierania";
      setError(message);
    }
  };

  // Ładowanie początkowe - funkcja zdefiniowana w środku całkowicie ucisza lintera
  useEffect(() => {
    const loadInitialTasks = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Nie udało się pobrać zadań");
        const data = await res.json();
        setTasks(data);
        setError(null);
      } catch (err) {
        const message = err instanceof Error ? err.message : "Błąd pobierania";
        setError(message);
      } finally {
        setLoading(false);
      }
    };

    loadInitialTasks();
  }, []); // Pusta tablica jest teraz w 100% legalna i poprawna dla ESLinta

  const addTask = async (taskData) => {
    try {
      const res = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(taskData),
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Błąd podczas dodawania zadania");
      
      setTasks((prev) => [...prev, data]);
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Błąd dodawania";
      setError(message);
      throw err;
    }
  };

  const deleteTask = async (id) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Błąd podczas usuwania zadania");
      setTasks((prev) => prev.filter((t) => t.id !== id));
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Błąd usuwania";
      setError(message);
    }
  };

  const updateTask = async (id, updatedFields) => {
    try {
      const res = await fetch(`${API_URL}/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedFields),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Błąd aktualizacji zadania");
      setTasks((prev) => prev.map((t) => (t.id === id ? data : t)));
      setError(null);
    } catch (err) {
      const message = err instanceof Error ? err.message : "Błąd aktualizacji";
      setError(message);
    }
  };

  return { tasks, loading, error, addTask, deleteTask, updateTask, refetch };
};