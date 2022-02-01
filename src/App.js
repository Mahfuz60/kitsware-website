import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Services from "./Components/Services/Services";
import Contact from "./Components/Contact/Contact";
import NavBar from "./Components/NavBar/NavBar";
import About from "./Components/About/About";
import Header from "./Components/Header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/" component={Header}></Route>
          <Route path="/service" component={Services}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/footer" component={About}></Route>

          <Redirect to="/" />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
