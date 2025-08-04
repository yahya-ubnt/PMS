
const BASE_URL = "http://localhost:5000/api/tenants";

export const fetchTenants = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch tenants");
  }
  return await response.json();
};

export const createTenant = async (tenant) => {
  const response = await fetch(BASE_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(tenant),
  });

  if (!response.ok) {
    const errorText = await response.text();
    console.error("Server response:", errorText);
    throw new Error("Failed to create tenant");
  }

  return await response.json();
};

export const updateTenant = async (id, updatedData) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedData),
  });

  if (!response.ok) {
    throw new Error("Failed to update tenant");
  }
  return await response.json();
};

export const deleteTenant = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`, {
    method: "DELETE",
  });

  if (!response.ok) {
    throw new Error("Failed to delete tenant");
  }
};
