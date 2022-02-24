import React from 'react';
import susecoimage from '../../assets/images/sustainableenergy.jpg'
import link from "../BankPrioritiesPage/BankPrioritiesPage"

function BankPriorities() {
  return <div className='bank-priorities'>
   <img className='section-image1'src={susecoimage} alt='wind energy' />
   
            <div className='bppflex'>
            
            <h1 className='bpph1'>Bank Priorities</h1>
            <p className='bppp1'>Your money can do more than you think! It can be your way to contribute to a change, learn more...</p>
            <button className='sectionButton1' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/mission';
      }}>More Details</button>
           
            </div>
           
            
        </div>
}

export default BankPriorities;
