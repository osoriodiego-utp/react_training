import React, { Fragment } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  //   Link,
  NavLink,
} from "react-router-dom";

import "./Navbar.css";
import Home from "../home/Home";
import Efecto from "../hooks/Efecto";
import Estado from "../hooks/Estado";
import Civilizaciones from "../router/Civilizaciones";

function Navbar() {
  return (
    <Fragment>
      <Router>
        <div className="topnav">
          {/* <Link to="/">Inicio</Link> */}
          <NavLink to="/">Inicio</NavLink>
          <NavLink to="/Hooks">Hooks</NavLink>
          <NavLink to="/Redux">Redux</NavLink>
          <NavLink to="/Router">Router</NavLink>
          <NavLink to="/Axios">Axios</NavLink>
          <NavLink to="/Styles">Styles</NavLink>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/Hooks">
            <h1>Hook de Estado</h1>
            <Estado />
            <hr></hr>
            <h1>Hook de Efecto</h1>
            <Efecto />
          </Route>
          <Route exact component={Civilizaciones}>
          </Route>
          <Route exact path="/Redux">
            <h1>Redux</h1>
          </Route>
          <Route exact path="/Axios">
            <h1>Axios</h1>
          </Route>
          <Route exact path="/Styles">
            <h1>Styles</h1>
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default Navbar;
