import React from "react";
import "../../Styles/homepage.css";

function LeftGradient() {
  return <div className="home-back-grad-left" />;
}

function RightGradient() {
  return <div className="home-back-grad-right" />;
}

function PageContent() {
  return (
    <React.Fragment>
      <h1 className="hero-line">
        Unlocking Silent
        <br />
        Conversations
      </h1>
      <p className="below-hero-line">
        Where Words Find Their
        <br />
        Voice in Silence
      </p>
    </React.Fragment>
  );
}


function HomePage() {
  return (
    <React.Fragment>
      <div className="home-page" id="home">
        <LeftGradient />
        <div className="home-page-padding">
          <PageContent />
          <button className="start-free-btn">Start free</button>
        </div>
        <RightGradient />
      </div>
    </React.Fragment>
  );
}

export default HomePage;
