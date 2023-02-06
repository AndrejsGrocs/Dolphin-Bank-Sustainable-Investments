import React from "react";
import loanimage1 from "../../assets/images/loanpage_img1.jpg";
import loanimage2 from "../../assets/images/loanpage_img2.jpg";

function LoanPage() {
  return (
    <div className="loan-page">
      <div className="loan-container">
        <img className="image-loan-page" src={loanimage1} />
        <p className="loan-page-text loan-text1">
          We finance companies, projects and people who make a positive
          difference in the world.
        </p>
      </div>

      <div className="loan-container">
        <p className="loan-page-text loan-text2">
          Therefore we have specialized in certain sectors and goods. This way,
          our loans only end up where people provide a special quality of life.
        </p>
        <button
        className="acbutton1 lp-button"
        type="button"
        onClick={(e) => {
          e.preventDefault();
          window.location.href = "/signup";
        }}
      >
        Sign Up
      </button>
        <img className="image-loan-page" src={loanimage2} />
        
      </div>
      
    </div>
  );
}

export default LoanPage;
