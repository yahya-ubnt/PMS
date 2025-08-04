// src/pages/Communication.jsx
import React from "react";
import MessageCard from "../components/MessageCard";

const mockMessages = [
  {
    subject: "Water Outage Notification",
    sender: "Management",
    date: "2025-08-01",
    snippet: "Please note there will be a water outage in Block A..."
  },
  {
    subject: "Rent Reminder",
    sender: "Admin",
    date: "2025-07-31",
    snippet: "Your rent is due by August 5th. Kindly pay in time..."
  },
  {
    subject: "Maintenance Schedule",
    sender: "Caretaker",
    date: "2025-07-30",
    snippet: "The generator maintenance will be done tomorrow..."
  }
];

const Communication = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#6a1b9a", marginBottom: "20px" }}>Communication</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockMessages.map((message, index) => (
          <MessageCard key={index} message={message} />
        ))}
      </div>
    </div>
  );
};

export default Communication;
