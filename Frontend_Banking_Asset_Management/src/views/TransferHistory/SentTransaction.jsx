import React from 'react';


import arrowimg  from '../../assets/images/db-bank-Red-Arrow.png'

function SentTransaction({transaction}) {
  return <div className='transaction-block-to' key={transaction._id}>
                     <p></p>
                     <img className='arrow-image-green' src={arrowimg} />
                     <p className='transaction-person'> {transaction.recipient.firstname} {transaction.recipient.lastname}</p>
                <p className='transaction-date'> 
                {`${new Date(transaction.createdOn).toLocaleDateString()} / ${new Date(transaction.createdOn).toLocaleTimeString()}`},
                
              
                </p>
                {/* <p>From:{user.firstname} {user.lastname}</p> */}
                
                
                <p className='sent-funds'> - {transaction.transmittedValue.toFixed(2)} EUR</p>
                </div>
            ;
}

export default SentTransaction;
