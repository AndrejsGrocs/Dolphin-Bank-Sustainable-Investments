import React from 'react';
import TransferGridline from './TransferGridline';

function TransferGrid({transactionList}) {
  return <div>
        {transactionList.map((transaction)=>{
          <TransferGridline transaction = {transaction}>
              
          </TransferGridline>

        })}



  </div>;
}

export default TransferGrid;
