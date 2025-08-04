// src/components/UtilityCard.jsx
import React from "react";

const UtilityCard = ({ utility }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{utility.type}</h3>
      <p><strong>Provider:</strong> {utility.provider}</p>
      <p><strong>Status:</strong> {utility.status}</p>
      <p><strong>Last Reading:</strong> {utility.lastReading}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#e8f5e9",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#1b5e20",
    marginBottom: "8px"
  }
};

export default UtilityCard;
