
import React, { useEffect, useState } from "react";
import {
  fetchTenants,
  createTenant,
  updateTenant,
  deleteTenant,
} from "../services/tenantService";
import TenantTable from "../components/TenantTable";
import TenantForm from "../components/TenantForm";
import Modal from "../components/Modal";

const Tenants = () => {
  const [tenants, setTenants] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentTenant, setCurrentTenant] = useState(null);
  const [formData, setFormData] = useState({
    tenantName: "",
    tenantID: "",
    unitAssigned: "",
    leaseStartDate: "",
    leaseEndDate: "",
    rentAmount: 0,
    contactInfo: { phone: "", email: "" },
  });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    loadTenants();
  }, []);

  const loadTenants = async () => {
    try {
      setLoading(true);
      const data = await fetchTenants();
      setTenants(data);
    } catch (error) {
      showNotification("Error loading tenants: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 3000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "phone" || name === "email") {
      setFormData((prev) => ({
        ...prev,
        contactInfo: { ...prev.contactInfo, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleEdit = (tenant) => {
    setIsEditing(true);
    setCurrentTenant(tenant);
    setFormData({
      tenantName: tenant.tenantName,
      tenantID: tenant.tenantID,
      unitAssigned: tenant.unitAssigned._id,
      leaseStartDate: new Date(tenant.leaseStartDate).toISOString().split('T')[0],
      leaseEndDate: new Date(tenant.leaseEndDate).toISOString().split('T')[0],
      rentAmount: tenant.rentAmount,
      contactInfo: { phone: tenant.contactInfo.phone, email: tenant.contactInfo.email },
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteTenant(id);
      setTenants((prev) => prev.filter((t) => t._id !== id));
      showNotification("Tenant deleted successfully", "success");
    } catch (error) {
      showNotification("Error deleting tenant: " + error.message, "error");
    }
    setDeleteConfirmation(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const updated = await updateTenant(currentTenant._id, formData);
        setTenants((prev) =>
          prev.map((t) => (t._id === currentTenant._id ? updated : t))
        );
        showNotification("Tenant updated successfully", "success");
      } else {
        const newTenant = await createTenant(formData);
        setTenants((prev) => [...prev, newTenant]);
        showNotification("Tenant added successfully", "success");
      }
      resetForm();
    } catch (error) {
      showNotification("Error saving tenant: " + error.message, "error");
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentTenant(null);
    setFormData({
      tenantName: "",
      tenantID: "",
      unitAssigned: "",
      leaseStartDate: "",
      leaseEndDate: "",
      rentAmount: 0,
      contactInfo: { phone: "", email: "" },
    });
    setIsFormOpen(false);
  };

  return (
    <div style={{ padding: "20px" }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
        <h1 style={{ fontSize: "2rem" }}>Tenants</h1>
        <button
          onClick={() => {
            setIsEditing(false);
            setIsFormOpen(true);
          }}
          style={{ 
            backgroundColor: "#3B82F6", 
            color: "white", 
            padding: "10px 20px", 
            borderRadius: "8px", 
            border: "none",
            cursor: "pointer"
          }}
        >
          Add New Tenant
        </button>
      </div>

      {notification.message && (
        <div
          style={{
            padding: "1rem",
            marginBottom: "1rem",
            borderRadius: "8px",
            backgroundColor: notification.type === 'success' ? '#D1FAE5' : '#FEE2E2',
            color: notification.type === 'success' ? '#065F46' : '#991B1B',
          }}
        >
          {notification.message}
        </div>
      )}

      <Modal isOpen={isFormOpen} onClose={resetForm}>
        <TenantForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          resetForm={resetForm}
        />
      </Modal>

      <Modal isOpen={!!deleteConfirmation} onClose={() => setDeleteConfirmation(null)}>
        <div style={{ textAlign: "center" }}>
          <h2 style={{ fontSize: "1.5rem", marginBottom: "1rem" }}>Confirm Deletion</h2>
          <p>Are you sure you want to delete this tenant?</p>
          <div style={{ display: "flex", justifyContent: "center", gap: "1rem", marginTop: "1.5rem" }}>
            <button
              onClick={() => setDeleteConfirmation(null)}
              style={{ 
                backgroundColor: "#6B7280", 
                color: "white", 
                padding: "10px 20px", 
                borderRadius: "8px", 
                border: "none",
                cursor: "pointer"
              }}
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(deleteConfirmation)}
              style={{ 
                backgroundColor: "#EF4444", 
                color: "white", 
                padding: "10px 20px", 
                borderRadius: "8px", 
                border: "none",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {loading ? (
        <div style={{ textAlign: "center", color: "#6B7280" }}>
          <p>Loading tenants...</p>
        </div>
      ) : (
        <TenantTable tenants={tenants} onEdit={handleEdit} onDelete={(id) => setDeleteConfirmation(id)} />
      )}
    </div>
  );
};

export default Tenants;

