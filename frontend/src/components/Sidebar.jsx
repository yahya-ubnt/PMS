// src/components/Sidebar.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import navLinks from "./NavLinks";

const Sidebar = () => {
  return (
    <div style={{ width: "220px", backgroundColor: "#1E293B", height: "100vh", color: "#fff" }}>
      <h2 style={{ padding: "20px", fontSize: "1.5rem" }}>Property</h2>
      <nav>
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            style={({ isActive }) => ({
              display: "block",
              padding: "12px 20px",
              color: isActive ? "#0EA5E9" : "#E2E8F0",
              textDecoration: "none",
              backgroundColor: isActive ? "#334155" : "transparent",
            })}
          >
            {link.name}
          </NavLink>
        ))}
      </nav>
    </div>
  );
};

export default Sidebar;
