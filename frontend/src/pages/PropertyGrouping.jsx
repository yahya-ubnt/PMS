// src/pages/PropertyGrouping.jsx
import React from "react";
import GroupCard from "../components/GroupCard";

const mockGroups = [
  {
    name: "Westlands Cluster",
    manager: "Jane Mwangi",
    totalProperties: 4,
    location: "Westlands"
  },
  {
    name: "Mombasa Block",
    manager: "Ali Said",
    totalProperties: 6,
    location: "Mombasa"
  },
  {
    name: "CBD Complex",
    manager: "Kevin Otieno",
    totalProperties: 3,
    location: "Nairobi CBD"
  }
];

const PropertyGrouping = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#0d47a1", marginBottom: "20px" }}>Property Grouping</h1>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {mockGroups.map((group, index) => (
          <GroupCard key={index} group={group} />
        ))}
      </div>
    </div>
  );
};

export default PropertyGrouping;
