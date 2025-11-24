import React, { use, useEffect } from "react";

function Cosa13() {
  const [contador, setContador] = React.useState(0);
  const [contador2, setContador2] = React.useState(0);

  const accion = () => {
    console.log("aparezco al renderizar");
  };

  const accion2 = () => {
    console.log("aparezco al cambiar contador2");
  };

  useEffect(() => {
    accion();
  }, []);

  useEffect(() => {
    accion2();
  }, [contador2]);

  return (
    <div>
      <button onClick={() => setContador(contador + 1)}>
        Contador1: {contador}
      </button>
      <button onClick={() => setContador2(contador2 + 1)}>
        Contador2: {contador2}
      </button>
    </div>
  );
}

export default Cosa13;
