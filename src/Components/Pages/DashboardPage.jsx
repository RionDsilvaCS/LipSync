import React from "react";
import ProjectCard from "../Layouts/ProjectCard";
import "../../Styles/dash.css";
import addIcon from "../../assets/add_icon.svg";
import downloadIcon from "../../assets/download_icon.svg";
import menuIcon from "../../assets/menu_icon.svg";
import playIcon from "../../assets/play_icon.svg";
import stopIcon from "../../assets/stop_icon.svg";
import voiceIcon from "../../assets/voice_icon.svg";
import projIcon from "../../assets/proj_icon.svg";
import editIcon from "../../assets/edit_icon.svg";

function PageTitle() {
  return <h1 className="page-title pad">Dashboard</h1>;
}

function PageContent() {
  return (
    <React.Fragment>
      <div className="dash-pt-v">
        <ProjectSection />
        <VideoSection />
      </div>
      <TextSection />
    </React.Fragment>
  );
}

function VideoSection() {
  return (
    <div className="cont-com man-vid">
      <div className="flex-div">
        <p className="three-two">Project_Name</p>
        <button className="dash-btn record">Record</button>
      </div>
      <div className="main-vid">
        <div className="bottom-bar">
          <button className="clr">
            <img src={playIcon} />
          </button>
          <button className="clr">
            <img src={voiceIcon} />
          </button>
          <button className="hero-btn">LipSync</button>
          <button className="clr">
            <img src={downloadIcon} />
          </button>
          <button className="clr">
            <img src={menuIcon} />
          </button>
        </div>
      </div>
    </div>
  );
}

function ProjectSection() {
  return (
    <div className="cont-com man-proj">
      <p className="three-two">Projects</p>
      <button className="dash-btn create-proj">
        <img src={addIcon} /> New Project
      </button>
      <p className="dash-head">Recent</p>
      <ProjectCard icon={projIcon} projectName="YouTube video record" />
      <ProjectCard icon={projIcon} projectName="LinkedIn video record" />
      <ProjectCard icon={projIcon} projectName="Instagram video record" />
      <button className="show-btn dash-head">Show more</button>
    </div>
  );
}

function TextSection() {
  return (
    <div className="dash-pt-t">
      <p className="three-two">Recorded Videos</p>
      <div className="grp-select-vid">
        <button className="select-vid">Video_1_record</button>
        <button className="select-vid">Video_2_record</button>
        <button className="select-vid">Video_3_record</button>
      </div>
      <div className="grp-vid-title">
        <p className="vid-title">Video_1_record content</p>
        <button>
          <img src={editIcon} />
          Edit
        </button>
      </div>
      <p className="vid-text">
        3rd year student pursuing Computer Science Engineering, Vellore
        Institute of Technology - Andhra Pradesh. All this started when i went
        through the problem statements provided in "IBM Hack" by IBM. and they
        needed a better solution. So i thought of giving it a try and here we
        are.
      </p>
    </div>
  );
}

function DashboardPage() {
  return (
    <div id="dashboard">
      <PageTitle />
      <PageContent />
    </div>
  );
}

export default DashboardPage;
