// src/App.js
import React from 'react';
import './App.css';
import { offices } from './data';
import OfficeCard from './OfficeCard';

function App() {
  return (
    <>
      <h1>Office Space at Affordable Range</h1>
      <div className="App">
        {offices.map((office, index) => (
          <OfficeCard key={index} office={office} />
        ))}
      </div>
    </>
  );
}

export default App;
