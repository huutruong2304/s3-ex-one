// import React, { Component, useState } from "react";

// class Switch extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       status: false,
//     };
//   }
//   displaySwitch = () => {
//     if (this.state.status) {
//       return " on";
//     }
//     return;
//   };

//   toggleClass = () => {
//     this.setState = {
//       status: !this.state.status,
//     };
//   };

//   handleClick = (event) => {
//     this.toggleClass();
//     console.log(this.state.status);
//   };

//   render() {
//     return (
//       <div
//         className={"switch switch-slider" + this.displaySwitch()}
//         id="swPhone"
//         onClick={(event) => this.handleClick(event)}
//       >
//         <div className="handle"></div>
//       </div>
//     );
//   }
// }

// export default Switch;

import React, { useState } from "react";
import "./Switch.css";

const Switch = () => {
  const [status, setStatus] = useState(false);

  const displaySwitch = () => {
    if (status) {
      return " on";
    }
    return "";
  };

  const toggleClass = () => {
    setStatus(!status);
  };

  const handleClick = (event) => {
    toggleClass();
  };

  return (
    <div
      className={"switch switch-slider" + displaySwitch()}
      id="swPhone"
      onClick={(event) => handleClick(event)}
    >
      <div className="handle"></div>
    </div>
  );
};

export default Switch;
