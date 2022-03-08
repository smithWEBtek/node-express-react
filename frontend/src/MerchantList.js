import React from 'react';
import Merchant from './Merchant';

const MerchantList = ({ merchants }) => {
  const renderedMerchants = merchants.map((merchant, index) => {
    return (
      <Merchant
        key={index}
        id={merchant.id}
        name={merchant.name}
        email={merchant.email}
      />
    )
  })

  return (
    <>
      {renderedMerchants}
    </>
  )
};

export default MerchantList;
