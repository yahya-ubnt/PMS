// src/components/MessageCard.jsx
import React from "react";

const MessageCard = ({ message }) => {
  return (
    <div style={styles.card}>
      <h3 style={styles.title}>{message.subject}</h3>
      <p><strong>From:</strong> {message.sender}</p>
      <p><strong>Date:</strong> {message.date}</p>
      <p>{message.snippet}</p>
    </div>
  );
};

const styles = {
  card: {
    backgroundColor: "#f3e5f5",
    padding: "16px",
    borderRadius: "12px",
    boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "300px",
    margin: "10px"
  },
  title: {
    color: "#6a1b9a",
    marginBottom: "8px"
  }
};

export default MessageCard;
