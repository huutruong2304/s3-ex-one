import React from "react";
import "./Widget.css";
import Tooltip from "./tooltip/Tooltip";

const Widget = (props) => {
  // switch (props.type) {
  //   case "single":
  //     return (
  //       <div className="widget">
  //         <Tooltip></Tooltip>
  //         <div className="title">
  //           microphone
  //           <Switch></Switch>
  //         </div>
  //         <Slider></Slider>
  //       </div>
  //     );
  //   case "double":
  //     return (
  //       <div className="widget">
  //         <Tooltip></Tooltip>
  //         <div className="title">
  //           microphone
  //           <Switch></Switch>
  //         </div>
  //         <div className="h2-title">mic volume</div>
  //         {/* <Slider></Slider> */}
  //         <Checkbox text="Volume Normalization" id="1"></Checkbox>
  //         <Checkbox text="Ambient Noise Reduction" id="2"></Checkbox>
  //         <Checkbox text="Voice Clarity" id="3"></Checkbox>
  //         <div className="h2-title mt20">
  //           mic sensitivity
  //           <Switch></Switch>
  //         </div>
  //         <div className="h2-body">
  //           Adjust this setting to remove unwanted background noise or increase
  //           the amount of mic output heard
  //         </div>
  //         <Slider></Slider>
  //       </div>
  //     );
  //   default:
  //     return null;
  // }
  return (
    <div className="widget" id="micPhone">
      <Tooltip></Tooltip>
      {props.children}
    </div>
  );
};

export default Widget;
