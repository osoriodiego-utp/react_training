import React, { Fragment } from "react";

import Contador from "./contador/Contador";
import SinNombre from "./useEffect/SinNombre";
import Navbar from "./navbar/Navbar";
import "./App.css";

function App() {
  return (
    <Fragment>
      <Navbar />
      {/* <div className="App">
        <h1>Hola React</h1>
        <Contador />
        <SinNombre />
      </div> */}
    </Fragment>
  );
}

export default App;
