
const BASE_URL = "http://localhost:5000/api/units";

export const fetchUnits = async () => {
  const response = await fetch(BASE_URL);
  if (!response.ok) {
    throw new Error("Failed to fetch units");
  }
  return await response.json();
};
