// src/pages/Reports.jsx
import React from "react";
import ReportCard from "../components/ReportCard";

const mockReports = [
  {
    title: "Monthly Rent Summary",
    type: "Financial",
    date: "2025-08-01",
    summary: "Total rent collected: KES 520,000"
  },
  {
    title: "Utility Usage",
    type: "Utilities",
    date: "2025-07-31",
    summary: "Water and electricity consumption trends for July"
  },
  {
    title: "Maintenance Logs",
    type: "Operations",
    date: "2025-07-30",
    summary: "All issues reported and resolved in July"
  }
];

const Reports = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#01579b", marginBottom: "20px" }}>Reports</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockReports.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
      </div>
    </div>
  );
};

export default Reports;
