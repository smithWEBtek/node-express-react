import React from 'react';
import './index.css';

const Merchant = ({ name, email }) => {
  return (
    <div className="merchant">
      <h3>{name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Merchant; 
