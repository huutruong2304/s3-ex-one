import React, { useState } from "react";
import "./Dot.css";

const Dot = () => {
  const [status, setStatus] = useState(false);

  const displayExpand = () => {
    return status ? [" active", " show"] : ["", ""];
  };
  const handleExpand = () => [setStatus(!status)];
  return (
    <div
      className={"dots3 hover-border" + displayExpand()[0]}
      id="profileMenuToggle"
      onClick={(event) => handleExpand(event)}
    >
      <div className={"profile-act" + displayExpand()[1]} id="profileMenu">
        <div className="act action">add</div>
        <div className="act action">import</div>
        <div className="act divider" />
        <div className="act action">rename</div>
        <div className="act action">duplicate</div>
        <div className="act action">export</div>
        <div className="act divider" />
        <div className="act action" id="deleteAction">
          delete
        </div>
      </div>
    </div>
  );
};

export default Dot;
