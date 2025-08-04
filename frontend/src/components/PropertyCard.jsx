// src/components/PropertyCard.jsx
import React from "react";

const PropertyCard = ({ property, onEdit, onDelete }) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-4">
      <h2 className="text-xl font-semibold">{property.name}</h2>
      <p className="text-gray-600">{property.address}</p>
      <p className="text-sm text-gray-500">Units: {property.totalUnits}</p>
      <div className="mt-4 flex justify-end space-x-2">
        <button
          onClick={() => onEdit(property)}
          className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(property._id)}
          className="bg-red-600 text-white px-3 py-1 rounded hover:bg-red-700"
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
