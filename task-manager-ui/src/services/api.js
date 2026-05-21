const API_URL = "http://localhost:4000";


export const fetchTasks = async () => {
  const response = await fetch(`${API_URL}/tasks`);
  if (!response.ok) throw new Error("Błąd podczas pobierania zadań");
  return await response.json();
};

export const fetchCategories = async () => {
  const response = await fetch(`${API_URL}/categories`);
  if (!response.ok) throw new Error("Błąd podczas pobierania kategorii");
  return await response.json();
};

export const createTask = async (taskData) => {
  const response = await fetch(`${API_URL}/tasks`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(taskData),
  });
  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.error || "Błąd podczas dodawania zadania");
  }
  return await response.json();
};

export const deleteTask = async (id) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "DELETE",
  });
  if (!response.ok) throw new Error("Błąd podczas usuwania zadania");
};

export const updateTask = async (id, data) => {
  const response = await fetch(`${API_URL}/tasks/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!response.ok) throw new Error("Błąd podczas aktualizacji zadania");
  return await response.json();
};
