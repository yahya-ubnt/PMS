// src/components/GroupCard.jsx
import React from "react";

const GroupCard = ({ group }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{group.name}</h3>
      <p><strong>Manager:</strong> {group.manager}</p>
      <p><strong>Total Properties:</strong> {group.totalProperties}</p>
      <p><strong>Location:</strong> {group.location}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#e3f2fd",
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

export default GroupCard;
