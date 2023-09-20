import React from "react";
import "../../Styles/about.css";
import gitIcon from "../../assets/github_icon.svg";
import linkIcon from "../../assets/linkedin_icon.svg";
import instaIcon from "../../assets/instagram_icon.svg";
import fastapiIcon from "../../assets/fastapi_icon.svg";
import mongodbIcon from "../../assets/mongodb_icon.svg";
import railwayIcon from "../../assets/railway_icon.svg";
import reactIcon from "../../assets/react_icon.svg";
import tensorflowIcon from "../../assets/tensorflow_icon.svg";

function StorySection() {
  return (
    <div className="story bor-pro">
      <p className="sub-title">Story behind LipSync</p>
      <p className="body-text">
        All this started when i went through the problem statements provided in
        "IBM Hack" by IBM. and they needed a better solution. So i thought of
        giving it a try and here we are.
      </p>
    </div>
  );
}

function SocialsButton({ icon, link }) {
  return (
    <a href={link} className="social-icon" target="_blank">
      <img src={icon} />
    </a>
  );
}

function DevSocials() {
  return (
    <div className="social-grp">
      <SocialsButton icon={gitIcon} link="https://github.com/RionDsilvaCS" />
      <SocialsButton
        icon={linkIcon}
        link="https://www.linkedin.com/in/rion-dsilva-043464229/"
      />
      <SocialsButton
        icon={instaIcon}
        link="https://instagram.com/rion_dsilva?utm_source=qr&igshid=YzU1NGVlODEzOA%3D%3D"
      />
    </div>
  );
}

function DevSection() {
  return (
    <div className="dev-name bor-pro">
      <p className="sub-title">Rion Sebastian Dsilva </p>
      <p className="body-text">
        3rd year student pursuing Computer Science Engineering, Vellore
        Institute of Technology - Andhra Pradesh.
      </p>
      <DevSocials />
    </div>
  );
}

function TechStackIcons() {
  return (
    <div className="tech-grp">
      <div className="tech-sub-grp">
        <img src={fastapiIcon} />
        <img src={railwayIcon} />
        <img src={mongodbIcon} />
      </div>
      <div className="tech-sub-grp">
        <img src={tensorflowIcon} />
        <img src={reactIcon} />
      </div>
    </div>
  );
}

function TechSection() {
  return (
    <div className="tech bor-pro">
      <p className="sub-title">Tech Stack</p>
      <TechStackIcons />
    </div>
  );
}

function PageTitle() {
  return (
    <center>
      <h1 className="page-title bottom-margin ">
        How was <text className="hero-line">LipSync</text> Built ?
      </h1>
    </center>
  );
}

function PageContent() {
  return (
    <div className="about-content-box">
      <div className="details">
        <StorySection />
        <DevSection />
      </div>
      <TechSection />
    </div>
  );
}

function AboutPage() {
  return (
    <div className="page " id="about">
      <PageTitle />
      <PageContent />
    </div>
  );
}

export default AboutPage;
