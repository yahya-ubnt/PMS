
import React, { useState, useEffect } from 'react';
import { fetchUnits } from '../services/unitService';

const TenantForm = ({ formData, handleChange, handleSubmit, isEditing, resetForm }) => {
  const [units, setUnits] = useState([]);

  useEffect(() => {
    const loadUnits = async () => {
      try {
        const data = await fetchUnits();
        setUnits(data);
      } catch (error) {
        console.error("Failed to fetch units:", error);
      }
    };
    loadUnits();
  }, []);

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "white",
        padding: "24px",
        borderRadius: "8px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
      }}
    >
      <h2 style={{ fontSize: "1.25rem", fontWeight: "bold", marginBottom: "16px" }}>{isEditing ? 'Edit Tenant' : 'Add a New Tenant'}</h2>
      
      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Full Name</label>
        <input
          type="text"
          name="tenantName"
          value={formData.tenantName}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>ID/Passport</label>
        <input
          type="text"
          name="tenantID"
          value={formData.tenantID}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Phone Number</label>
        <input
          type="text"
          name="phone"
          value={formData.contactInfo.phone}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Email</label>
        <input
          type="email"
          name="email"
          value={formData.contactInfo.email}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Assign Unit</label>
        <select
          name="unitAssigned"
          value={formData.unitAssigned}
          onChange={handleChange}
          style={styles.input}
          required
        >
          <option value="">Select a Unit</option>
          {units.map(unit => (
            <option key={unit._id} value={unit._id}>{unit.name}</option>
          ))}
        </select>
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Lease Start Date</label>
        <input
          type="date"
          name="leaseStartDate"
          value={formData.leaseStartDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Lease End Date</label>
        <input
          type="date"
          name="leaseEndDate"
          value={formData.leaseEndDate}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ marginBottom: "16px" }}>
        <label style={{ display: "block", fontWeight: "500", color: "#374151" }}>Rent Amount</label>
        <input
          type="number"
          name="rentAmount"
          value={formData.rentAmount}
          onChange={handleChange}
          style={styles.input}
          required
        />
      </div>

      <div style={{ display: "flex", justifyContent: "flex-end", gap: "16px", marginTop: "24px" }}>
        <button
          type="button"
          onClick={resetForm}
          style={styles.button.cancel}
        >
          Cancel
        </button>
        <button
          type="submit"
          style={styles.button.submit}
        >
          {isEditing ? 'Update Tenant' : 'Add Tenant'}
        </button>
      </div>
    </form>
  );
};

const styles = {
  input: {
    width: "100%",
    border: "1px solid #D1D5DB",
    borderRadius: "6px",
    padding: "8px 12px",
    marginTop: "4px",
  },
  button: {
    cancel: {
      backgroundColor: "#6B7280",
      color: "white",
      padding: "10px 16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer"
    },
    submit: {
      backgroundColor: "#3B82F6",
      color: "white",
      padding: "10px 16px",
      borderRadius: "6px",
      border: "none",
      cursor: "pointer"
    }
  }
}

export default TenantForm;
