// src/pages/Tenants.jsx
import React from "react";
import TenantTable from "../components/TenantTable";

const mockTenants = [
  {
    name: "Alice Mwangi",
    email: "alice@example.com",
    phone: "0700123456",
    unit: "Unit A1",
    leaseStart: "2023-01-01",
    leaseEnd: "2023-12-31"
  },
  {
    name: "Brian Otieno",
    email: "brian@example.com",
    phone: "0723456789",
    unit: "Unit B2",
    leaseStart: "2023-03-15",
    leaseEnd: "2024-03-14"
  },
  {
    name: "Caroline Wanja",
    email: "caroline@example.com",
    phone: "0712345678",
    unit: "Unit C3",
    leaseStart: "2023-06-01",
    leaseEnd: "2024-05-31"
  }
];

const Tenants = () => {
  return (
    <div style={{ padding: "20px" }}>
      <h1 style={{ color: "#0d47a1", marginBottom: "20px" }}>Tenants</h1>
      <TenantTable tenants={mockTenants} />
    </div>
  );
};

export default Tenants;
