import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";

import './App.css';
import Home from "./components/HomePage";
import Contact from "./components/Contact";
import Food from "./components/Food";

// window.scroll({ top: 0, left: 0, behavior: 'smooth' })

function App() {
  return (
    <>
      <CssBaseline />
      <Router>
        <Switch>
          <Route path="/" component={Home} />
          <Route path='/aboutus' component={Food} />
          <Route path='/contact' component={Contact} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
