// src/components/UnitCard.jsx
import React from "react";

const UnitCard = ({ unit }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{unit.name}</h3>
      <p><strong>Property:</strong> {unit.property}</p>
      <p><strong>Size:</strong> {unit.size} sq ft</p>
      <p><strong>Status:</strong> {unit.status}</p>
      <p><strong>Rent:</strong> KES {unit.rent}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#f0f4f8",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#0d47a1",
    marginBottom: "8px"
  }
};

export default UnitCard;
