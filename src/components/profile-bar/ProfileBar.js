import React from "react";
import "./ProfileBar.css";
import Dot from "./dot/Dot";
import Dropdown from "./drop-down/Dropdown";

const ProfileBar = () => {
  return (
    <div className="profile-bar flex">
      <div className="loader" tooltip="Syncing Profiles" />
      <div>profile</div>
      <input type="text" name="profile" id="profileEdit" maxLength={25} />
      <Dropdown></Dropdown>
      <Dot></Dot>
      <div id="deleteAlert" className="flex alert profile-del">
        <div className="title">delete profile</div>
        <div className="body-text t-center">
          You're about to delete this profile. All bindings in this profile will
          be deleted.
        </div>
        <div className="thx-btn" id="deleteConfirm">
          delete
        </div>
      </div>
      <div className="obm hover-border" tooltip="On-board Profiles" />
      <div className="divider" />
      <div className="batt batt-30" tooltip="30% Battery" />
    </div>
  );
};

export default ProfileBar;
