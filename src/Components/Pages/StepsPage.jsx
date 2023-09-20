import React from "react";
import "../../Styles/steps.css";
import StepButton from "../Layouts/StepButton";

function StepBox({ stepName, title, content, buttonName }) {
  return (
    <div className="box">
      <div className="back-grad" />
      <div className="space">
        <center>
          <p className="card-step">{stepName}</p>
        </center>
        <p className="card-title">{title}</p>
        <p className="card-cont">{content}</p>
        <center>
          <StepButton text={buttonName} />
        </center>
      </div>
    </div>
  );
}

function StepBoxPurp({ stepName, title, content, buttonName }) {
  return (
    <div className="box purp">
      <div className="back-grad-purp" />
      <div className="space">
        <center>
          <p className="card-step">{stepName}</p>
        </center>
        <p className="card-title">{title}</p>
        <p className="card-cont">
          {content}
          <br />
          ever done.
        </p>
        <center>
          <button className="card-btn-purp">{buttonName}</button>
        </center>
      </div>
    </div>
  );
}

function PageTitle() {
  return (
    <h1 className="page-title bottom-margin ">
      How to use <text className="hero-line">LipSync</text> ?
    </h1>
  );
}

function StepsPage() {
  return (
    <div className="page">
      <PageTitle />
      <div className="page-about">
        <StepBox
          stepName="Step One"
          title="Login for Free"
          content="Create a new account using your email and a dashboard will be visible now, tap that buddy."
          buttonName="Sign In"
        />
        <StepBoxPurp
          stepName="Step Two"
          title="Record a Video"
          content="You are inside the dashboard, start recording videos and stop when"
          buttonName="Record"
        />
        <StepBox
          stepName="Step Three"
          title="Click on LipSync"
          content="When done with recording your video click on LipSync and the words will find their voice in silence."
          buttonName="LipSync"
        />
      </div>

      <div className="shadow-box">
        <div className="color-shadow"></div>
        <div className="color-shadow-purp"></div>
        <div className="color-shadow"></div>
      </div>
    </div>
  );
}

export default StepsPage;
