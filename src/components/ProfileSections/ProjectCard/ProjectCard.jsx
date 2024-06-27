import React from "react";
import galleryIcon from "../../../../public/gallery.png";
import arrowIcon from "../../../../public/arrow_next.svg";
import "./ProjectCard.css";

const ProjectCard = () => {
  return (
    <div className="project-card-wrapper">
      <div className="project-card-upper">
        <div className="project-card-image-placeholder">
          <img src={galleryIcon} alt="Gallery icon" />
        </div>
        <div className="project-card-title-description">
          <div className="project-card-title">Iam a certified Azure Developer</div>
          <div className="project-card-description">
            Here is the link to my certificate
          </div>
        </div>
      </div>
      <div className="project-card-show-projects">
          <a
            href="https://learn.microsoft.com/api/credentials/share/en-us/SivaShankar-6432/3DF1B64444E87CB0?sharingId=C493B5110EB9AC8D"
            target="_blank"
             onClick={() => window.open("https://learn.microsoft.com/api/credentials/share/en-us/SivaShankar-6432/3DF1B64444E87CB0?sharingId=C493B5110EB9AC8D")}>
  Certificate
       </a>
        <img src={arrowIcon} alt="Arrow icon" />
      </div>
    </div>
  );
};

export default ProjectCard;
