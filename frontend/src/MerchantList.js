import React from 'react';
import Merchant from './Merchant';

const MerchantList = ({ merchants }) => {
  const renderedMerchants = merchants.map((merchant, index) => <Merchant key={index} name={merchant.name} email={merchant.email} />);

  return (
    <>
      <div><Merchant name="Frank Sinatra" email="frank@mgm.com" /></div>
      {renderedMerchants}
    </>
  )
};

export default MerchantList;
