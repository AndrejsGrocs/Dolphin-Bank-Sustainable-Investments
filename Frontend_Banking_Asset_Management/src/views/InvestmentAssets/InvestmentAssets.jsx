import React from 'react';
import susecoimage from '../../assets/images/db-bank-Investment.png'
import link from "../LoanPage/LoanPage"

function Investment() {
  return <div className='investment'>
  
            <div className='bppflex2'>
            <h1 className='bpph2'>Investment</h1>
            <p className='bppp2'>Investing without a conscience? </p>
            <p className='bppp2'>No thanks!</p>
             <button className='sectionButton2' type="button" onClick={(e) => {
      e.preventDefault();
      window.location.href='/investment';
      }}>More Details</button>
            </div>
            <img className='section-image1' src={susecoimage} alt='park landscape picture from drone'/>
        </div>
}

export default Investment;