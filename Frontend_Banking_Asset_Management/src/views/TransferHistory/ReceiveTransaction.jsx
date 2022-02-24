import React from 'react';

import arrowimg  from '../../assets/images/db-bank-Green-Arrow.png'

function ReceiveTransaction({transaction}) {


  return <div className='transaction-block-from' key={transaction._id}>
                     <p></p>
                     <img className='arrow-image-green' src={arrowimg} />
                     <p className='transaction-person'>{transaction.sender.firstname} {transaction.sender.lastname}</p>
                <p className='transaction-date'> 
                {`${new Date(transaction.createdOn).toLocaleDateString()} / ${new Date(transaction.createdOn).toLocaleTimeString()}`},
                
              
                </p>
                {/* <p>From:{user.firstname} {user.lastname}</p> */}
               
                
                <p className='received-funds'> + {transaction.transmittedValue.toFixed(2)} EUR</p>
                </div>
            ;
}

export default ReceiveTransaction;
