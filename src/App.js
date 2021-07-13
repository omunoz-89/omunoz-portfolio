import "./App.css";
import React from "react";
import { Route, Switch, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />

        <div className="container">
          <Switch>
            <Route path="/skills" component={Skills} />
            <Route path="/projects" component={Projects} />
            <Route exact path="/" component={Home} />
            <Route path="/*" component={Home} />
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
