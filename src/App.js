import React from "react";
import "./App.css";
import WidgetBody from "./components/widget-body/WidgetBody";
import Footer from "./components/footer/Footer";
import NavBar from "./components/nav-bar/NavBar";
import ProfileBar from "./components/profile-bar/ProfileBar";

function App() {
  return (
    <div className="main-container">
      <NavBar></NavBar>
      <div className="body-wrapper scrollable">
        <ProfileBar></ProfileBar>
        <WidgetBody></WidgetBody>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
