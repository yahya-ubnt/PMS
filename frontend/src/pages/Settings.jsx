// src/pages/Settings.jsx
import React from "react";
import SettingCard from "../components/SettingCard";

const mockSettings = [
  {
    name: "Currency",
    value: "KES",
    description: "Default billing currency"
  },
  {
    name: "Timezone",
    value: "EAT (GMT+3)",
    description: "System timezone"
  },
  {
    name: "Notifications",
    value: "Enabled",
    description: "System alerts and reminders"
  }
];

const Settings = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#bf360c", marginBottom: "20px" }}>Settings</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockSettings.map((setting, index) => (
          <SettingCard key={index} setting={setting} />
        ))}
      </div>
    </div>
  );
};

export default Settings;
