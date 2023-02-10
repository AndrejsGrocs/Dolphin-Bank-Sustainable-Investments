import React from "react";
import accountimage from "../../assets/images/db-bank-Open-Account-Image.png";

function AccountPage() {
  return (
    <div className="account-page">
    <img className="image-account-page" src={accountimage} />
      <div className="account-texts">
        <h1 className="acc-header">
          Dolphin Bank offers the convenience of mobile banking - without
          compromising on your values.{" "}
        </h1>
        <p className="account-page-text">
          We use modern technologies that make your everyday life easier and
          contribute to the future of us all.{" "}
          <br/>
          <button
            className="acbutton1 account-button"
            type="button"
            onClick={(e) => {
              e.preventDefault();
              window.location.href = "/signup";
            }}
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
}

export default AccountPage;
