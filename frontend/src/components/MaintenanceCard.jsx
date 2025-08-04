// src/components/MaintenanceCard.jsx
import React from "react";

const MaintenanceCard = ({ request }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{request.issue}</h3>
      <p><strong>Unit:</strong> {request.unit}</p>
      <p><strong>Status:</strong> {request.status}</p>
      <p><strong>Date Reported:</strong> {request.dateReported}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fff3e0",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#e65100",
    marginBottom: "8px"
  }
};

export default MaintenanceCard;
