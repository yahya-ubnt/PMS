// src/services/propertyService.js

const BASE_URL = "http://localhost:5000/api/properties"; // Backend endpoint

export const fetchProperties = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch properties");
  }
  return await response.json();
};

export const addProperty = async (property) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(property),
  });

  if (!response.ok) {
    const errorText = await response.text(); // Useful for debugging
    console.error("Server response:", errorText);
    throw new Error("Failed to add property");
  }

  return await response.json(); // Return the added property
};

export const updateProperty = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to update property");
  }
  return await response.json();
};

export const deleteProperty = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete property");
  }
};
