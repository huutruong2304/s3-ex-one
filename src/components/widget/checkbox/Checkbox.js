import React from "react";
import "./Checkbox.css";

const Checkbox = (props) => {
  return (
    <div className="check-item">
      <input type="checkbox" id={props.id} />
      <label htmlFor={[props.id]} className="check-box">
        <div className="check-text">{props.text}</div>
      </label>
    </div>
  );
};

export default Checkbox;
