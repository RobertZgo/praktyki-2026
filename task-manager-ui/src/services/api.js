const API_URL = "http://localhost:4000";

// 1. Pobieranie zadań
export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error("Błąd podczas pobierania zadań");
  return await response.json();
};

// 2. Pobieranie kategorii
export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Błąd podczas pobierania kategorii");
  return await response.json();
};

// 3. Dodawanie zadania
export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(taskData),
  });

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Błąd podczas dodawania zadania");
  }

  return await response.json();
};
