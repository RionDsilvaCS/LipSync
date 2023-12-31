import React from "react";
import "../../Styles/productpage.css";

function PageTitle() {
  return (
    <h1 className="page-title">
      Introducing <text className="hero-line">LipSync</text>
    </h1>
  );
}
function TopGradBox() {
  return <div className="top-grad-box" />;
}

function BottomGradBox() {
  return <div className="bottom-grad-box" />;
}

function PageContent() {
  return (
    <div className="product-content-box">
      <p className="body-text product-body-text">
        Lipsync is a revolutionary new AI-powered service that can read your
        lips and caption your videos for you, even if there is no audio or the
        audio quality is poor. It can also generate a preferable voiceover for
        your video, making it perfect for creating engaging and accessible
        content.
        <br />
        <br />
        Lipsync is easy to use. Simply record a video without any audio or with
        bad audio quality. Then, upload the video to Lipsync and let our AI do
        its magic. In minutes, you'll have a video with perfect captions and a
        voiceover that sounds like you. Lipsync is the perfect solution for
        anyone who wants to create engaging and accessible videos, without
        having to worry about audio quality.
      </p>
    </div>
  );
}
function ProductPage() {
  return (
    <div className="page" id="product">
      <PageTitle />
      <TopGradBox />
      <PageContent />
      <BottomGradBox />
    </div>
  );
}

export default ProductPage;
