// src/pages/Utilities.jsx
import React from "react";
import UtilityCard from "../components/UtilityCard";

const mockUtilities = [
  {
    type: "Electricity",
    provider: "KPLC",
    status: "Active",
    lastReading: "14520 kWh"
  },
  {
    type: "Water",
    provider: "Nairobi Water",
    status: "Pending",
    lastReading: "3200 L"
  },
  {
    type: "Internet",
    provider: "Zuku",
    status: "Active",
    lastReading: "Unlimited"
  }
];

const Utilities = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#1b5e20", marginBottom: "20px" }}>Utilities</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockUtilities.map((utility, index) => (
          <UtilityCard key={index} utility={utility} />
        ))}
      </div>
    </div>
  );
};

export default Utilities;
