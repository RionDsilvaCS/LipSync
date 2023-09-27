import React,{useState} from "react";
import jsonData from "../../project_data.json"

export default function ProjectName({ icon, changeIndex }) {
  const projects = jsonData['projects'];

  function handleClick(index){
    changeIndex(index);
  }
    return(
      <React.Fragment>
        {projects.map((project, index) => (
          <button className="proj-card" key={index} onClick={() => handleClick(index)}>
          <div>
            <img src={icon} />
          </div>
          {project["project_name"]}
        </button>
        ))
        }
          
      </React.Fragment>
        
    );

}