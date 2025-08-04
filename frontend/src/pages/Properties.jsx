import React, { useEffect, useState } from "react";
import {
  fetchProperties,
  addProperty,
  updateProperty,
  deleteProperty,
} from "../services/propertyService";
import PropertyCard from "../components/PropertyCard";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [currentProperty, setCurrentProperty] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    totalUnits: 0,
  });

  useEffect(() => {
    loadProperties();
  }, []);

  const loadProperties = async () => {
    try {
      const data = await fetchProperties();
      setProperties(data);
    } catch (error) {
      console.error("Error loading properties:", error);
    } finally {
      setLoading(false);
    }
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
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this property?")) {
      try {
        await deleteProperty(id);
        setProperties((prev) => prev.filter((p) => p._id !== id));
      } catch (error) {
        console.error("Error deleting property:", error);
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (isEditing) {
        const updated = await updateProperty(currentProperty._id, formData);
        setProperties((prev) =>
          prev.map((p) => (p._id === currentProperty._id ? updated : p))
        );
      } else {
        const newProperty = await addProperty(formData);
        setProperties((prev) => [...prev, newProperty]);
      }
      resetForm();
    } catch (error) {
      console.error("Error saving property:", error);
    }
  };

  const resetForm = () => {
    setIsEditing(false);
    setCurrentProperty(null);
    setFormData({ name: "", address: "", totalUnits: 0 });
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">
        {isEditing ? "Edit Property" : "Add Property"}
      </h1>

      {/* Form for Adding/Editing Property */}
      <form
        onSubmit={handleSubmit}
        className="mb-6 space-y-4 bg-white p-4 rounded-lg shadow"
      >
        <div>
          <label className="block font-medium">Property Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>
        <div>
          <label className="block font-medium">Total Units</label>
          <input
            type="number"
            name="totalUnits"
            value={formData.totalUnits}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            required
          />
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          {isEditing ? "Update Property" : "Add Property"}
        </button>
        {isEditing && (
          <button
            type="button"
            onClick={resetForm}
            className="bg-gray-400 text-white px-4 py-2 rounded ml-2"
          >
            Cancel
          </button>
        )}
      </form>

      {/* Property List */}
      {loading ? (
        <p>Loading properties...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {properties.map((property) => (
            <PropertyCard
              key={property._id}
              property={property}
              onEdit={handleEdit}
              onDelete={handleDelete}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Properties;
