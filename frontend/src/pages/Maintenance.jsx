// src/pages/Maintenance.jsx
import React from "react";
import MaintenanceCard from "../components/MaintenanceCard";

const mockRequests = [
  {
    issue: "Leaking pipe",
    unit: "Unit A1",
    status: "In Progress",
    dateReported: "2025-07-30"
  },
  {
    issue: "Broken window",
    unit: "Unit B2",
    status: "Pending",
    dateReported: "2025-08-01"
  },
  {
    issue: "Power outage",
    unit: "Unit C3",
    status: "Resolved",
    dateReported: "2025-07-25"
  }
];

const Maintenance = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#e65100", marginBottom: "20px" }}>Maintenance</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockRequests.map((request, index) => (
          <MaintenanceCard key={index} request={request} />
        ))}
      </div>
    </div>
  );
};

export default Maintenance;
