import React from "react";
import "./App.css";
import Contador from "./contador/Contador";
import SinNombre from "./useEffect/SinNombre";

function App() {
  return (
    <div className="App">
      <h1>Hola React</h1>
      <Contador />
      <SinNombre />
    </div>
  );
}

export default App;
