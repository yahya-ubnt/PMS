// src/components/ReportCard.jsx
import React from "react";

const ReportCard = ({ report }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{report.title}</h3>
      <p><strong>Type:</strong> {report.type}</p>
      <p><strong>Date:</strong> {report.date}</p>
      <p><strong>Summary:</strong> {report.summary}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#e1f5fe",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#01579b",
    marginBottom: "8px"
  }
};

export default ReportCard;
