import React from "react";
import "../Styles/steps.css";

function Steps() {
  return (
    <div className="page ">
      <h1 className="page-title ">
        How to use <text className="hero-line">LipSync</text> ?
      </h1>

      <div className="page-about">
        <div className="box">
          <div className="back-grad" />
          <div className="space">
            <center>
              <p className="card-step">Step One</p>
            </center>
            <p className="card-title">Login for Free</p>
            <p className="card-cont">
              Create a new account using your email and a dashboard will be
              visible now, tap that buddy.
            </p>
            <center>
              <a href="#" className="card-btn">
                Sign In
              </a>
              </center>
          </div>
        </div>
        <div className="box purp">
          <div className="back-grad-purp" />
          <div className="space">
            <center>
              <p className="card-step">Step Two</p>
            </center>
            <p className="card-title">Record a Video</p>
            <p className="card-cont">
              You are inside the dashboard, start recording videos and stop when
              ever done.
            </p>
          </div>
        </div>
        <div className="box">
          <div className="back-grad" />
          <div className="space">
            <center>
              <p className="card-step">Step Three</p>
            </center>
            <p className="card-title">Click on LipSync</p>
            <p className="card-cont">
              When done with recording your video click on LipSync and the words
              will find their voice in silence.
            </p>
            <center>
              <a href="#" className="card-btn">
                LipSync
              </a>
              </center>
          </div>
        </div>
      </div>
      <div className="shadow-box">
        <div className="color-shadow"></div>
        <div className="color-shadow-purp"></div>
        <div className="color-shadow"></div>
      </div>
    </div>
  );
}

export default Steps;
