import React from "react";
import image1 from "../../assets/images/assetmanagement1.jpeg";
import image2 from "../../assets/images/ecoocean.jpg";
import image3 from "../../assets/images/ocean1.jpg";
import image4 from "../../assets/images/sustainableenergy.jpg";

import BankPriorities from "../BankPriorities/BankPriorities";
import CreditCards from "../CreditCards/CreditCrads";
import Investment from "../InvestmentAssets/InvestmentAssets";
import Loan from "../Loan/Loan";
import SiteMapAndContacts from "../SiteMapAndContacts/SiteMapAndContacts";
import Footer from "../../components/Footer/Footer";
import landingimage from "../../assets/images/ocean1.jpg";


export default function Landing() {
  return (
    <div className="box-element   Landing">
      <div className="banner">
      <img className="image-landing-page" src={landingimage} />

        <div className="bannerContent">
          <h1 className="bannerHeader1">Dolphin Bank</h1>
          <p className="bannerText1">
            Your money can Do more.
          </p> 
          <button
            className="bannerButton1"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/signup";
            }}
          >
            Open bank account
          </button>
        </div>

        <div className="banner-stats">
          <div className="stats-block">
            <h1 className="stats-header">909,360</h1>
            <p className="stats-text">United People of DB</p>
          </div>
          <div className="stats-block">
            <h1 className="stats-header">108t +</h1>
            <p className="stats-text">Daily plastic removed from the oceans</p>
          </div>

          <div className="stats-block">
            <h1 className="stats-header">99m +</h1>
            <p className="stats-text">Rainforest trees planted</p>
          </div>

          <div className="stats-block">
            <h1 className="stats-header">99.3m €</h1>
            <p className="stats-text">Invested in ECO projects</p>
          </div>
        </div>
      </div>

      <BankPriorities />
      <CreditCards />
      <Loan />
      <Investment />
      <SiteMapAndContacts />
      <Footer />
    </div>
  );
}
