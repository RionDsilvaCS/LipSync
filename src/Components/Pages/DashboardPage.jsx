import React, {useState} from "react";
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
import jsonData from "../../project_data.json";

function PageTitle() {
  return <h1 className="page-title pad">Dashboard</h1>;
}

function PageContent() {
  const [project_id, setId] = useState(2);
  const project = jsonData.projects[project_id];
  function changeIndex(index){
      setId(index);
  }
  return (
    <React.Fragment>
      <div className="dash-pt-v">
        <ProjectSection changeId={changeIndex}/>
        <VideoSection project={project}/>
      </div>
      <TextSection project={project}/>
    </React.Fragment>
  );
}

function VideoSection({project}) {
  
  return (
    <div className="cont-com man-vid">
      <div className="flex-div">
        <p className="three-two">{project["project_name"]}</p>
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

function ProjectSection({changeId}) {
  function changeIndex(index){
    changeId(index);
  }
  return (
    <div className="cont-com man-proj">
      <p className="three-two">Projects</p>
      <button className="dash-btn create-proj">
        <img src={addIcon} /> New Project
      </button>
      <p className="dash-head">Recent</p>
      <ProjectCard icon={projIcon} changeIndex={changeIndex}/>
      <button className="show-btn dash-head">Show more</button>
    </div>
  );
}

function TextSection({project}) {

  const [vid_txt, setVidTxt] = useState(project.project_video[0].video_script)
  const [vid_title, setVidTitle] = useState(project.project_video[0].video_title)

  const vidCardClick = (index) => {
    setVidTxt(project.project_video[index].video_script)
    setVidTitle(project.project_video[index].video_title)
  }
  return (
    <div className="dash-pt-t">
      <p className="three-two">Recorded Videos</p>
      <div className="grp-select-vid">
        {project["project_video"].map((video, index) => (
          <button className="select-vid" onClick={() => {vidCardClick(index)}} key={index}>{video["video_title"]}</button>
        ))
        }
      </div>
      <div className="grp-vid-title">
        <p className="vid-title">{vid_title}</p>
        <button>
          <img src={editIcon} />
          Edit
        </button>
      </div>
      <p className="vid-text">
        {vid_txt}
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
