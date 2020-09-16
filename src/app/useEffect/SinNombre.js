import "./SinNombre.css";
import React, { useEffect, useState } from "react";
// importar {useEffect} => React.useEffect



function SinNombre() {
  const [title, setTitle] = useState("no changed");

  var letras = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u"];

  function getRandomWords() {
    var n = Math.floor(Math.random() * (2)) + 4;
    var word = "";
    for (let i = 0; i < n; i++) {
      word += letras[Math.floor(Math.random() * letras.length)];
    }
    return word;
  }

  useEffect(() => {
    document.title = `${title}`;
  });

  return (
    <div>
        <h1>Componente: UseEffect</h1>
      <button className="button button-push" onClick={() => setTitle(getRandomWords)}>Change Title</button>
    </div>
  );
}

export default SinNombre;
