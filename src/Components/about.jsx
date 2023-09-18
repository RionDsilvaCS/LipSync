import React from "react";
import "../Styles/about.css";
import gitIcon from "../assets/github_icon.svg";
import linkIcon from "../assets/linkedin_icon.svg";
import instaIcon from "../assets/instagram_icon.svg";
import fastapiIcon from "../assets/fastapi_icon.svg";
import mongodbIcon from "../assets/mongodb_icon.svg";
import railwayIcon from "../assets/railway_icon.svg";
import reactIcon from "../assets/react_icon.svg";
import tensorflowIcon from "../assets/tensorflow_icon.svg";




function About() {
  return (
    <div className="page " id="about">
      <center>
        <h1 className="page-title bottom-margin ">
          How was <text className="hero-line">LipSync</text> Built ?
        </h1>
      </center>

      <div className="about-content-box">
        <div className="details">
          <div className="story bor-pro">
            <p className="sub-title">Story behind LipSync</p>
            <p className="body-text">
              All this started when i went through the problem statements
              provided in "IBM Hack" by IBM. and they needed a better solution.
              So i thought of giving it a try and here we are.{" "}
            </p>
          </div>
          <div className="dev-name bor-pro">
            <p className="sub-title">Rion Sebastian Dsilva </p>
            <p className="body-text">
              3rd year student pursuing Computer Science Engineering, Vellore
              Institute of Technology - Andhra Pradesh.
            </p>
            <div className="social-grp">
              <a
                href="https://github.com/RionDsilvaCS"
                className="social-icon"
                target="_blank"
              >
                <img src={gitIcon} />
              </a>
              <a
                href="https://www.linkedin.com/in/rion-dsilva-043464229/"
                className="social-icon"
                target="_blank"
              >
                <img src={linkIcon} />
              </a>
              <a
                href="https://instagram.com/rion_dsilva?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D"
                className="social-icon"
                target="_blank"
              >
                <img src={instaIcon} />
              </a>
            </div>
          </div>
        </div>
        <div className="tech bor-pro">
          <p className="sub-title">Tech Stack</p>
          <div className="tech-grp">
            <div className="tech-sub-grp">
                <img src={fastapiIcon}/>
                <img src={railwayIcon}/>
                <img src={mongodbIcon}/>
            </div>
            <div className="tech-sub-grp">
            <img src={tensorflowIcon}/>
            <img src={reactIcon}/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
