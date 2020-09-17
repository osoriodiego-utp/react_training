import React, { useEffect, useState, Fragment } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./Navbar.css";
import Home from "../home/Home";
import Efecto from "../hooks/Efecto";
import Estado from "../hooks/Estado";

function Navbar() {
  return (
    <Fragment>
      <Router>
        <div className="topnav">
          <Link className="active" to="/">
            Inicio
          </Link>
          <Link to="/HookEffect">Hooks</Link>
          <Link to="/HookState">Hooks</Link>
          <Link to="/HookEffect">Redux</Link>
          <Link to="/HookEffect">Router</Link>
          <Link to="/HookEffect">Axios</Link>
          <Link to="/HookEffect">Syles</Link>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/HookState" component={Estado} />
          <Route exact path="/HookEffect" component={Efecto} />
        </Switch>
      </Router>
    </Fragment>
  );
}

export default Navbar;
