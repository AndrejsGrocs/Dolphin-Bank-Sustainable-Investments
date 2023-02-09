import React from "react";
import cardRobin from "../../assets/images/db-bank-AbouUs-Robin.png";
import aboutuslinkedin from "../../assets/images/db-bank-AbouUs-Icons-LinkedIn.png";
import aboutusmail from "../../assets/images/db-bank-AbouUs-Icons-Email.png";
import aboutusgit from "../../assets/images/db-bank-AbouUs-Icons-GitHub.png";

function RobinContactCard() {
  return (
    <>
      <div className="cardRobin">
        <img
          className="image-robin"
          src={cardRobin}
          alt="contact person image"
        />

        <div className="aboutus-card-texts-links-robin">
          <h2 className="about-us-card-header-robin">Robin Skladny</h2>
          <p className="about-us-card-text-robin">Backend/Frontend</p>
          <div className="socialmedia-icons-block-robin">
            <a
              href="https://www.linkedin.com/in/robin-skladny-647a1b229/"
              target="_blank"
            >
              <img
                className="aboutus-socmediaicon"
                src={aboutuslinkedin}
                alt="social media icon"
              ></img>
            </a>
            <a href="https://github.com/Robynio" target="_blank">
              <img
                className="aboutus-socmediaicon"
                src={aboutusgit}
                alt="social media icon"
              ></img>
            </a>
            <a href="mailto:robin_skladny@gmx.de">
              <img
                className="aboutus-socmediaicon"
                src={aboutusmail}
                alt="social media icon"
              ></img>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default RobinContactCard;
