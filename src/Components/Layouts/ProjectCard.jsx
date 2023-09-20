import React from "react";


export default function ProjectName({ icon, projectName }) {
    return(
        <button className="proj-card">
        <div>
          <img src={icon} />
        </div>
        {projectName}
      </button>
    );

}