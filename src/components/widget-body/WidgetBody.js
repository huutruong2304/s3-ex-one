import React from "react";
import "./WidgetBody.css";
import Widget from "../widget/Widget";
import Slider from "../widget/slider/Slider";
import Switch from "../widget/switch/Switch";
import Checkbox from "../widget/checkbox/Checkbox";

const WidgetBody = () => {
  return (
    <div className="body-widgets flex">
      <div className="widget-col col-left flex">
        <Widget>
          <div className="title">
            microphone
            <Switch></Switch>
          </div>
          <div className="h2-title">mic volume</div>
          <Slider></Slider>

          <div className="h2-title mt20">
            mic sensitivity
            <Switch></Switch>
          </div>
          <div className="h2-body">
            Adjust this setting to remove unwanted background noise or increase
            the amount of mic output heard
          </div>
          <Slider></Slider>
        </Widget>
      </div>
      <div className="widget-col col-right flex">
        <Widget>
          <div className="title">
            sidetone
            <Switch></Switch>
          </div>
          <Slider></Slider>
        </Widget>
        <Widget>
          <div className="title">enhancements</div>
          <Checkbox text="Volume Normalization" id="1"></Checkbox>
          <Checkbox text="Ambient Noise Reduction" id="2"></Checkbox>
          <Checkbox text="Voice Clarity" id="3"></Checkbox>
        </Widget>
      </div>
    </div>
  );
};

export default WidgetBody;
