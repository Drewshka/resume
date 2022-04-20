// import "./App.scss";
import React from "react";
import Resume from "./pages/Resume";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import FormSubmit from "./components/FormSubmit";
// import Header from "./components/Header/Header";
// import Body from "./components/Body/Body";
// var FontAwesome = require("react-fontawesome");
// import ReactDOM from "react-dom";
// import Resume from "react-resume-component";
// import CV from "react-cv";
// import headshot from "./assets/andrew.JPG";

function App() {
  return (
    <div className="App">
      {/* <Header />
      <Body /> */}
      <Resume />
      {/* <Router>
        <Switch>
          <Route path="/" exact component={Resume} />
          <Route path="/submit" exact component={FormSubmit} />
        </Switch>
      </Router> */}
    </div>
  );
}

export default App;
