// src/components/SettingCard.jsx
import React from "react";

const SettingCard = ({ setting }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{setting.name}</h3>
      <p><strong>Value:</strong> {setting.value}</p>
      <p><strong>Description:</strong> {setting.description}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#fbe9e7",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#bf360c",
    marginBottom: "8px"
  }
};

export default SettingCard;
