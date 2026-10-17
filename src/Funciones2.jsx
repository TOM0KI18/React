import React from 'react'

const Funciones2 = () => {

    const frutas = ["manzana", "pera", "sandia"];

  return (
    <div>
      {frutas.map((fruta, index) => {
        return <li key={index}>Fruta: {fruta}</li>;
      })}
    </div>
  );
};

export default Funciones2
