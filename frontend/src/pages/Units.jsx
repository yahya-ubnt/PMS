// src/pages/Units.jsx
import React from "react";
import UnitCard from "../components/UnitCard";

const mockUnits = [
  {
    name: "Unit A1",
    property: "Sunset Apartments",
    size: 850,
    status: "Occupied",
    rent: 25000
  },
  {
    name: "Unit B2",
    property: "Garden Villas",
    size: 950,
    status: "Vacant",
    rent: 30000
  },
  {
    name: "Unit C3",
    property: "Palm Court",
    size: 700,
    status: "Occupied",
    rent: 22000
  }
];

const Units = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#0d47a1", marginBottom: "20px" }}>Units</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockUnits.map((unit, index) => (
          <UnitCard key={index} unit={unit} />
        ))}
      </div>
    </div>
  );
};

export default Units;
