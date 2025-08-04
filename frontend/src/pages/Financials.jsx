// src/pages/Financials.jsx
import React from "react";
import FinancialCard from "../components/FinancialCard";

const mockFinancials = [
  { title: "Total Rent Collected", amount: 750000, description: "This month", color: "#4caf50" },
  { title: "Pending Payments", amount: 120000, description: "As of today", color: "#f44336" },
  { title: "Maintenance Costs", amount: 56000, description: "This month", color: "#ff9800" },
  { title: "Utility Bills", amount: 47000, description: "Ongoing", color: "#03a9f4" }
];

const Financials = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#0d47a1", marginBottom: "20px" }}>Financial Overview</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {mockFinancials.map((item, index) => (
          <FinancialCard
            key={index}
            title={item.title}
            amount={item.amount}
            description={item.description}
            color={item.color}
          />
        ))}
      </div>
    </div>
  );
};

export default Financials;
