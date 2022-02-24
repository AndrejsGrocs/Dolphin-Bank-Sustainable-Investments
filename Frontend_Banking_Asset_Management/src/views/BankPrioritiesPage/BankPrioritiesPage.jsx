import React from 'react'
import image1 from '../../assets/images/db-bank-Mission-Page-Image.png'
import Footer from '../../components/Footer/Footer'

export default function BankPrioritiesPage() {
    return (
        <div className='sectionContainer'>
        <div className='banner-3'>
            <h1 className='bank-priorities-banner-header'>The page in under construction for now.</h1>
        </div>
        <button
            className="acbutton1"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </button>
         {/* <img className='bannerImg'
              src={image1}
              alt="image"
              
            /> */}
            <h1></h1>
            
        </div>
    )
}  



