// src/components/TenantTable.jsx
import React from "react";

const TenantTable = ({ tenants }) => {
  return (
    <div style={{ overflowX: "auto", boxShadow: "0 2px 6px rgba(0,0,0,0.1)" }}>
      <table style={{
        width: "100%",
        borderCollapse: "collapse",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        overflow: "hidden"
      }}>
        <thead style={{ backgroundColor: "#0d47a1", color: "#fff" }}>
          <tr>
            <th style={styles.th}>Name</th>
            <th style={styles.th}>Email</th>
            <th style={styles.th}>Phone</th>
            <th style={styles.th}>Unit</th>
            <th style={styles.th}>Lease Start</th>
            <th style={styles.th}>Lease End</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, index) => (
            <tr key={index} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
              <td style={styles.td}>{tenant.name}</td>
              <td style={styles.td}>{tenant.email}</td>
              <td style={styles.td}>{tenant.phone}</td>
              <td style={styles.td}>{tenant.unit}</td>
              <td style={styles.td}>{tenant.leaseStart}</td>
              <td style={styles.td}>{tenant.leaseEnd}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  th: {
    padding: "12px",
    textAlign: "left"
  },
  td: {
    padding: "12px",
    borderBottom: "1px solid #ddd"
  }
};

export default TenantTable;
