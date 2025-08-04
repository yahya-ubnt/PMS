// src/components/DashboardCard.jsx
import React from "react";

const DashboardCard = ({ title, value, bgColor }) => {
  return (
    <div style={{
      backgroundColor: bgColor || "#0EA5E9",
      color: "#fff",
      padding: "20px",
      borderRadius: "12px",
      width: "100%",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
    }}>
      <h3 style={{ fontSize: "1.1rem" }}>{title}</h3>
      <p style={{ fontSize: "2rem", fontWeight: "bold" }}>{value}</p>
    </div>
  );
};

export default DashboardCard;
