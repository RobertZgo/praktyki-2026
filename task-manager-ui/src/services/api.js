const API_URL = "http://localhost:4000";

export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error("Błąd podczas pobierania zadań");
  return await response.json();
};
