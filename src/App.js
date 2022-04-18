import "./App.scss";
import React from "react";
import Header from "./components/Header/Header";
import Body from "./components/Body/Body";
// var FontAwesome = require("react-fontawesome");
// import ReactDOM from "react-dom";
// import Resume from "react-resume-component";
// import CV from "react-cv";
// import headshot from "./assets/andrew.JPG";

function App() {
  return (
    <div className="App">
      <Header />
      <Body />
    </div>
  );
}

export default App;
