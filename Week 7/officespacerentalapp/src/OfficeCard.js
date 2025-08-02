// src/OfficeCard.js
import React from 'react';
import './App.css';

const OfficeCard = ({ office }) => {
  const rentClass = office.Rent <= 60000 ? 'textRed' : 'textGreen';

  return (
    <div className="card">
      <img src={office.Image} width="25%" height="25%" alt="Office Space" />
      <h3>Name: {office.Name}</h3>
      <h3 className={rentClass}>Rent: Rs. {office.Rent}</h3>
      <h3>Address: {office.Address}</h3>
    </div>
  );
};

export default OfficeCard;
