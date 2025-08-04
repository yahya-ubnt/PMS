// src/components/PropertyCard.jsx
import React from 'react';

const PropertyCard = ({ property, onEdit, onDelete }) => {
  return (
    <div style={{
      backgroundColor: 'white',
      borderRadius: '8px',
      boxShadow: '0 2px 2px 0 rgba(0,0,0,0.14), 0 3px 1px -2px rgba(0,0,0,0.12), 0 1px 5px 0 rgba(0,0,0,0.2)',
      transition: 'box-shadow 0.3s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
    }}>
      <div style={{ padding: '16px' }}>
        <h2 style={{ fontSize: '20px', fontWeight: '500', color: '#333', marginBottom: '8px' }}>{property.name}</h2>
        <p style={{ fontSize: '14px', color: '#666', marginBottom: '12px' }}>{property.address}</p>
        <div style={{ display: 'flex', alignItems: 'center', fontSize: '14px', color: '#757575' }}>
          <svg xmlns="http://www.w3.org/2000/svg" height="20px" viewBox="0 0 24 24" width="20px" fill="#757575" style={{ marginRight: '8px' }}>
            <path d="M0 0h24v24H0V0z" fill="none"/>
            <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S13.66 5 12 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm-4 0c1.66 0 2.99-1.34 2.99-3S5.66 5 4 5C2.34 5 1 6.34 1 8s1.34 3 3 3z"/>
          </svg>
          <span>{property.totalUnits} Units</span>
        </div>
      </div>
      <div style={{ padding: '8px 16px', backgroundColor: '#f5f5f5', borderTop: '1px solid #eee', display: 'flex', justifyContent: 'flex-end', gap: '8px' }}>
        <button
          onClick={() => onEdit(property)}
          style={{
            color: '#6200EE',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            textTransform: 'uppercase',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.2s ease-in-out',
          }}
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(property._id)}
          style={{
            color: '#6200EE',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontWeight: '500',
            textTransform: 'uppercase',
            padding: '8px 12px',
            borderRadius: '4px',
            transition: 'background-color 0.2s ease-in-out',
          }}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default PropertyCard;
