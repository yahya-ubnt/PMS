// src/pages/Dashboard.jsx
import React from "react";
import DashboardCard from "../components/DashboardCard";

const Dashboard = () => {
  const stats = [
    { title: "Total Properties", value: 18, bgColor: "#3B82F6" },
    { title: "Total Tenants", value: 64, bgColor: "#10B981" },
    { title: "Occupancy Rate", value: "82%", bgColor: "#F59E0B" },
    { title: "Outstanding Rent", value: "KES 120,000", bgColor: "#EF4444" },
    { title: "Open Maintenance Tickets", value: 6, bgColor: "#8B5CF6" },
  ];

  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ fontSize: "2rem", marginBottom: "20px" }}>Dashboard</h1>
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))",
        gap: "20px",
      }}>
        {stats.map((card) => (
          <DashboardCard
            key={card.title}
            title={card.title}
            value={card.value}
            bgColor={card.bgColor}
          />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
