import React from "react";

const TenantTable = ({ tenants, onEdit, onDelete }) => {
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
            <th style={styles.th}>Unit</th>
            <th style={styles.th}>Contact</th>
            <th style={styles.th}>Lease End</th>
            <th style={styles.th}>Rent Status</th>
            <th style={styles.th}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {tenants.map((tenant, index) => (
            <tr key={tenant._id} style={{ backgroundColor: index % 2 === 0 ? "#f9f9f9" : "#ffffff" }}>
              <td style={styles.td}>{tenant.tenantName}</td>
              <td style={styles.td}>{tenant.unitAssigned ? tenant.unitAssigned.name : 'N/A'}</td>
              <td style={styles.td}>{tenant.contactInfo?.phone || 'N/A'}</td>
              <td style={styles.td}>{new Date(tenant.leaseEndDate).toLocaleDateString()}</td>
              <td style={styles.td}>{tenant.paymentStatus}</td>
              <td style={styles.td}>
                <button onClick={() => onEdit(tenant)} style={styles.button.edit}>Edit</button>
                <button onClick={() => onDelete(tenant._id)} style={styles.button.delete}>Delete</button>
              </td>
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
  },
  button: {
    edit: {
      backgroundColor: "#F59E0B",
      color: "white",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer",
      marginRight: "8px"
    },
    delete: {
      backgroundColor: "#EF4444",
      color: "white",
      padding: "8px 12px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer"
    }
  }
};

export default TenantTable;
