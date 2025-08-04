import React, { useEffect, useState } from "react";
import {
  fetchProperties,
  addProperty,
  updateProperty,
  deleteProperty,
} from "../services/propertyService";
import PropertyCard from "../components/PropertyCard";
import PropertyForm from "../components/PropertyForm";
import Modal from "../components/Modal";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    totalUnits: 0,
  });
  const [notification, setNotification] = useState({ message: "", type: "" });
  const [deleteConfirmation, setDeleteConfirmation] = useState(null);

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      setLoading(true);
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      showNotification("Error loading properties: " + error.message, "error");
    } finally {
      setLoading(false);
    }
  };

  const showNotification = (message, type) => {
    setNotification({ message, type });
    setTimeout(() => setNotification({ message: "", type: "" }), 4000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: name === "totalUnits" ? Number(value) : value,
    }));
  };

  const handleEdit = (property) => {
    setIsEditing(true);
    setCurrentProperty(property);
    setFormData({
      name: property.name,
      address: property.address,
      totalUnits: property.totalUnits,
    });
    setIsFormOpen(true);
  };

  const handleDelete = async (id) => {
    try {
      await deleteProperty(id);
      setProperties((prev) => prev.filter((p) => p._id !== id));
      showNotification("Property deleted successfully", "success");
    } catch (error) {
      showNotification("Error deleting property: " + error.message, "error");
    }
    setDeleteConfirmation(null);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const updated = await updateProperty(currentProperty._id, formData);
        setProperties((prev) =>
          prev.map((p) => (p._id === currentProperty._id ? updated : p))
        );
        showNotification("Property updated successfully", "success");
      } else {
        const newProperty = await addProperty(formData);
        setProperties((prev) => [...prev, newProperty]);
        showNotification("Property added successfully", "success");
      }
      resetForm();
    } catch (error) {
      showNotification("Error saving property: " + error.message, "error");
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentProperty(null);
    setFormData({ name: "", address: "", totalUnits: 0 });
    setIsFormOpen(false);
  };

  return (
    <div style={{ padding: '24px', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: '400', color: '#333' }}>Properties</h1>
        <button
          onClick={() => {
            setIsEditing(false);
            setFormData({ name: "", address: "", totalUnits: 0 });
            setIsFormOpen(true);
          }}
          style={{
            backgroundColor: '#6200EE',
            color: 'white',
            padding: '10px 24px',
            borderRadius: '4px',
            border: 'none',
            cursor: 'pointer',
            textTransform: 'uppercase',
            fontWeight: '500',
            boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
            transition: 'box-shadow 0.2s ease-in-out',
          }}
        >
          Add New Property
        </button>
      </div>

      {notification.message && (
        <div
          style={{
            padding: '16px',
            marginBottom: '16px',
            borderRadius: '4px',
            color: 'white',
            backgroundColor: notification.type === 'success' ? '#4CAF50' : '#F44336',
            boxShadow: '0 2px 4px rgba(0,0,0,0.2)',
          }}
        >
          {notification.message}
        </div>
      )}

      <Modal isOpen={isFormOpen} onClose={resetForm}>
        <PropertyForm
          formData={formData}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          isEditing={isEditing}
          resetForm={resetForm}
        />
      </Modal>

      <Modal isOpen={!!deleteConfirmation} onClose={() => setDeleteConfirmation(null)}>
        <div style={{ padding: '24px' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '500', marginBottom: '20px' }}>Confirm Deletion</h2>
          <p style={{ color: '#666', marginBottom: '24px' }}>Are you sure you want to delete this property?</p>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '16px' }}>
            <button
              onClick={() => setDeleteConfirmation(null)}
              style={{ color: '#6200EE', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', textTransform: 'uppercase' }}
            >
              Cancel
            </button>
            <button
              onClick={() => handleDelete(deleteConfirmation)}
              style={{ color: '#6200EE', background: 'none', border: 'none', cursor: 'pointer', fontWeight: '500', textTransform: 'uppercase' }}
            >
              Delete
            </button>
          </div>
        </div>
      </Modal>

      {loading ? (
        <div style={{ textAlign: 'center', color: '#666', padding: '40px' }}>
          <p>Loading properties...</p>
        </div>
      ) : properties.length === 0 ? (
        <div style={{ textAlign: 'center', color: '#666', padding: '40px', border: '2px dashed #ccc', borderRadius: '8px' }}>
          <p>No properties found. Get started by adding a new one!</p>
        </div>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              onEdit={handleEdit}
              onDelete={(id) => setDeleteConfirmation(id)}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
