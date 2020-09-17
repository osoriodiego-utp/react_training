import React, { useEffect, useState } from "react";
import { Fragment } from "react";

const Civilizaciones = () => {
  const [usuarios, setUsuarios] = React.useState([]);

  React.useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch("https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations");
    const users = await data.json();
    setUsuarios(users.civilizations);
  };

  return (
    <div>
      <ul>
        {usuarios.map((item) => (
          <li key={item.id}>
            {item.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Civilizaciones;
