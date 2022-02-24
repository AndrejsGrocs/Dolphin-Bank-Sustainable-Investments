

import React from 'react';
import creditcardimage from '../../assets/images/db-bank-Card-BG.png'


function CreditCards() {
  return <div className='credit-cards'>
  
            <div className='bppflex2'>
            <h1 className='bpph2'>Account</h1>
            <p className='bppp2'>Make your money part of the solution.</p>
            <button className='sectionButton2' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/account';
      }}>More Details</button>
            </div>
            <img className='section-image2' src={creditcardimage} alt='dolphin bank credit card'/>
        </div>
}

export default CreditCards;