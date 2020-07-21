import React, { Component } from "react";
import Slider from "./slider/Slider";

class Widget extends Component {
  render() {
    return (
      <div>
        <div className="widget">
          <div className="title">microphone</div>
          <div className="h2-title">mic volume</div>
         <Slider></Slider>
        </div>
      </div>
    );
  }
}

export default Widget;
