import React from 'react';
import './index.css';

const Merchant = ({ id, name, email }) => {
  return (
    <div className="merchant">
      <h3>id: {id} {name}</h3>
      <p>{email}</p>
    </div>
  )
}

export default Merchant; 
