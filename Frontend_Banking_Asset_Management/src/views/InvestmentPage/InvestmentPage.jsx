import React from "react";
import investmentimg1 from "../../assets/images/db-bank-Investment-Page-Image.png";
import investmentlogo from "../../assets/images/db-bank-logo-1.png";

export default function InvestmentPage() {
  return (
    <div className="investment-page">
      <div className="banner-3">
        <img className="image-investment-page" src={investmentimg1} />

        <p className="investment-page-banner-header">
          For us, investing money well and achieving a measurable sustainable
          impact have always gone hand in hand.
        </p>
      </div>

      <div className="investment-page-texts">
        <p className="investment-page-text">
        Whether with impact funds, an impact portfolio, savings plans or crowdinvesting - discover your impact investment with Dolphin Bank.
        </p>
       

        <div className="investment-page-text2">
        <img className="image-investment-logo" src={investmentlogo} />
        <h1 className="investment-page-text-h1">
        Your sustainability bank.


        </h1>
        </div>

     
      </div>
      <button
        className="acbutton1 ip-button"
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
  );
}
