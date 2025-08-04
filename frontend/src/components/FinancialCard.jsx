// src/components/FinancialCard.jsx
import React from "react";

const FinancialCard = ({ title, amount, description, color }) => {
  return (
    <div style={{ ...styles.card, borderLeft: `6px solid ${color || "#2196f3"}` }}>
      <h3 style={styles.title}>{title}</h3>
      <p style={styles.amount}>KES {amount.toLocaleString()}</p>
      {description && <p style={styles.description}>{description}</p>}
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#ffffff",
    padding: "20px",
    borderRadius: "12px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    minWidth: "250px",
    maxWidth: "300px"
  },
  title: {
    margin: "0 0 10px",
    fontSize: "18px",
    color: "#0d47a1"
  },
  amount: {
    fontSize: "20px",
    fontWeight: "bold",
    color: "#2e7d32"
  },
  description: {
    fontSize: "14px",
    color: "#555"
  }
};

export default FinancialCard;
