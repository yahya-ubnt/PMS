// src/layouts/MainLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const MainLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1, padding: "20px", backgroundColor: "#F8FAFC", minHeight: "100vh" }}>
        <Outlet />
      </main>
    </div>
  );
};

export default MainLayout;
