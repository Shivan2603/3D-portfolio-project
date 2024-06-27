import React from "react";
import playStoreIcon from "../../../public/play_store.png";
import chat from "../../../public/chat.png"
import carIcon from "../../../public/car.png";
import carCard from "../../../public/car_card.png";
import ecommerceIcon from "../../../public/ecommerce.png";
import chat1 from "../../../public/chat1.png";
import githubIcon from "../../../public/github.svg";
import ecommerceCard from "../../../public/ecommerce_card.png";
import "./Projects.css";

const Projects = () => {
  const projectData = [
    {
      imgSrc: carCard,
      thumbSrc: carIcon,
      title: "NEICE",
      tech: [".Net c#", "Angular", "SSMS", "WindowsServices"],
      link: "https://www.tetruscorp.com/health-human-services/"
    },
    {
      imgSrc: ecommerceCard,
      thumbSrc: ecommerceIcon,
      title: "Faciliteasy",
      tech: ["React", ".NetC#", "SSMS"],
      link:"https://mobile.faciliteasy.com/"
    },
    {
      imgSrc: chat1,
      thumbSrc: chat,
      title: "Chat App using Go Lang",
      tech: ["GoLang", "Angular", "Websocket", "MongoDB"],
      link:"https://github.com/Shivan2603/Go_Chat_App",
      githubLink:true
    },
  ];

  return (
    <div className="project-card-container">
      <h1 className="page-title">My Favorite Projects</h1>
      <ul className="cards">
        {projectData.map((project, index) => (
          <>
            <li>
              <div className="card">
                <img src={project.imgSrc} className="card__image" alt="" />
                <div className="card__overlay">
                  <div className="card__header">
                    <svg
                      className="card__arc"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path />
                    </svg>
                    <img
                      className="card__thumb"
                      src={project.thumbSrc}
                      alt=""
                    />
                    <div className="card__header-text">
                      <h3 className="card__title">{project.title}</h3>
                      <div className="tech-used">
                        {project.tech.map((tech, index) => (
                          <span className="tech" key={index}>
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="buttons">
                    <a href={project.link} className="button playstore">
                      <img src={playStoreIcon} alt="Play Store Icon"/>
                      link
                    </a>
                    <div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
