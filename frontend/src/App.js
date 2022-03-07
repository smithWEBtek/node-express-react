import React, { useState, useEffect } from 'react';
import MerchantList from './MerchantList';

function App() {
  const [merchants, setMerchants] = useState(false);
  useEffect(() => {
    getMerchants();
  }, []);

  function getMerchants() {
    fetch('http://localhost:3001')
      .then(response => {
        console.log('getMerchants response: ', response);
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
        console.log('createMerchant response: ', response);
        return response.json();
      })
      .then(data => {
        alert(data);
        getMerchants();
      });
  }

  function deleteMerchant() {
    let id = prompt('Enter merchant id');
    fetch(`http://localhost:3001/merchants/${id}`, {
      method: 'DELETE',
    })
      .then(response => {
        console.log('***  RESPONSE in App.js  ***');
        console.log('response: ', response);
        return response.json();
      })
      .then(data => {
        alert(data);
        getMerchants();
      });
  }

  return (
    <div>
      {merchants ? <MerchantList merchants={merchants} /> : 'There is no merchant data available'}
      <br />
      <button onClick={createMerchant}>Add merchant</button>
      <br />
      <button onClick={deleteMerchant}>Delete merchant</button>
    </div>
  );
}
export default App;
