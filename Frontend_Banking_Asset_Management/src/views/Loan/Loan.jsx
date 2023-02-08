import React from 'react';
import susecoimage from '../../assets/images/db-bank-Loan.png'

function Loan() {
  return <div className='loan'>
            <img className='section-image1' src={susecoimage} alt='bank customer'/>
            <div className='bppflex'>
            <h1 className='bpph1'>Loan</h1>
            <p className='bppp1'>Money for good - We finance change!</p>
            <button className='sectionButton1' type="button"  onClick={(e) => {
      e.preventDefault();
      window.location.href='/loan';
      }}>More Details</button>
            </div>
            
        </div>
}

export default Loan;