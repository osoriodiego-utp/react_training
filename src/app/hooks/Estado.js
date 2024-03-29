import React, { useState } from "react";
import "./Hooks.css";

export default function Contador() {
  const title = "Contador";
  // Declara una nueva variable de estado, la cual llamaremos “count”
  const [count, setCount] = useState(0);

  const aumentar = () => {
    console.log("Button clicked.");
    setCount(count + 1);
  };

  return (
    // se puede usar <Fragment></Fragment>
    <div className="section">
      <p>Component: {title}</p>
      <p>Has dado click {count} veces</p>
      <button onClick={aumentar}>Aumentar</button>
      {/* <button onClick={() => {
        console.log("Button clicked.")
        setCount(count + 1)}}>
        Click me
      </button> */}
    </div>
  );
}
