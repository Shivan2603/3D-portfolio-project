import React from "react";
import playStoreIcon from "../../../../public/linkedin.svg";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./AppsCard.css";

const AppsCard = () => {
  return (
    <div className="apps-card-wrapper">
      <div className="apps-card-upper">
        <div className="apps-card-image-placeholder">
          <img src={playStoreIcon} alt="Car icon" />
        </div>
        <div className="apps-card-title-description">
          <div className="apps-card-title">My Linked IN</div>
          <div className="apps-card-description">
            This is my linked in profile
          </div>
        </div>
      </div>
      <div className="apps-card-show-projects">
        <a
          href="https://www.linkedin.com/in/siva-shankar-4a7849226//"
          target="_blank"
          rel="noopener noreferrer"
        >
          <navbutton>link</navbutton>
        </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default AppsCard;
