import React, { useState, useEffect } from 'react';
import MerchantList from './MerchantList';
import './index.css';

function App() {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchants();
  }, []);

  function getMerchants() {
    fetch('http://localhost:3001')
      .then(response => {
        return response.json();
      })
      .then(data => {
        setMerchants(data);
      });
  }

  function createMerchant() {
    let name = prompt('Enter merchant name');
    let email = prompt('Enter merchant email');
    fetch('http://localhost:3001/merchants', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email }),
    })
      .then(response => {
        return response.json();
      })
      .then(data => {
        alert(data);
        getMerchants();
      });
  }

  function deleteMerchant() {
    let id = prompt('Enter merchant id');

    console.log('id: ', id)

    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        debugger;
        return response.json();
      })
      .then(data => {
        console.log('delete response data: ', data);
        getMerchants();
      })
      .catch(error => {
        console.log('error: ', error);
      });
  }

  return (
    <div>
      <div className="navbar">
        <button onClick={deleteMerchant} className="navbutton">Delete merchant</button>
        <button onClick={createMerchant} className="navbutton">Add merchant</button>
      </div>
      <br />
      {merchants ? <MerchantList merchants={merchants} /> : 'There is no merchant data available'}
    </div>
  );
}

export default App;
