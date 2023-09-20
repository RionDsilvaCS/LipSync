import React from "react";
import "../../Styles/steps.css";

export default function StepButton({ text }) {
  return (
    <button className="card-btn">
      {text}
    </button>
  );
}
