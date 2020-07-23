import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container on" id="slPhone">
      <div className="foot min">low</div>
      <div className="foot mid">medium</div>
      <div className="foot max">high</div>
      <div id="slPhoneFill" className="left" style={{ width: "321.6px" }} />
      <div className="track" />
      <div id="slPhoneTip" className="slider-tip" style={{ left: "306.858px" }}>
        66
      </div>
      <input
        type="range"
        min={10}
        max={100}
        defaultValue={66}
        step={1}
        className="slider"
        id="slPhoneRange"
      />
    </div>
  );
};

export default Slider;
