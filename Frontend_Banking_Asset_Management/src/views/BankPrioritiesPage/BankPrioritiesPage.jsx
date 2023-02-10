import React from "react";
import image1 from "../../assets/images/db-bank-Mission-Page-Image.png";
import Footer from "../../components/Footer/Footer";

export default function BankPrioritiesPage() {
  return (
    <div className="sectionContainer">
    
      <div className="banner-3">
      <img className="image-bank-priorities" src={image1} />
      
       {/* <h1 className="bank-priorities-banner-header">We want change!</h1> */}
      </div>



      <div className="bank-priorities-texts">
      
      <h1 className="bank-priorities-bold-text head">We want change!</h1>
        <p className="bank-priorities-text">
          The global ecosystem’s collapse has been predicted for decades now,
          yet the lack of comprehensive options for the individual to contribute
          to a change are frustrating.
        </p>
        <br/>

        <p className="bank-priorities-text">
          Not enough, many of us support an unbalanced, exploitative and
          destructive system without being aware of it.
        </p>
        <br/>

        <h1 className="bank-priorities-bold-text">
          Traditional banks take your money and invest it into some of the worst
          of industries like weapon production, speculation with food or the oil
          industry to name just a few.
        </h1>
        <br/>

        <p className="bank-priorities-text">
          The key potential money has to support and gain progress so urgently
          needed in our world is by no means utilized.
        </p>
        <br/>

        <p className="bank-priorities-text">
          There is a powerful tool to make a change, a sphere you interact with
          every single day, your financial footprint or so to put, your choice
          of the right bank! What we do as a sustainable bank is very simple.
        </p>
        <br/>

        <h1 className="bank-priorities-bold-text">
          We take our customers' money and transform the economy with it. In the
          end, everyone benefits.
        </h1>
        <button
        className="acbutton1 bp-button"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/signup";
        }}
      >
        Sign Up
      </button>
      </div>

      {/* <img className='bannerImg'
              src={image1}
              alt="image"
              
            /> */}
    
    </div>
  );
}
