import React from "react";
import "./Slider.css";

const Slider = () => {
  return (
    <div className="slider-container on">
      <input
        type="range"
        min={10}
        max={100}
        defaultValue={55}
        step={1}
        className="slider"
        id="slPhoneRange"
      />
    </div>
  );
};

export default Slider;
