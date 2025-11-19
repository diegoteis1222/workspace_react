import { useState } from "react";

function MiBoton() {
  function handlePulsado() {
    setPulsado(true);
  }
  function handleNoPulsado() {
    setPulsado(false);
  }

  const [pulsado, setPulsado] = useState(false);
  return (
    <button
      onClick={handlePulsado}
      onDoubleClick={handleNoPulsado}
      className="naranja"
    >
      {pulsado ? "Me pulsaste" : "Boton"}
    </button>
  );
}

function Cosa9() {
  return MiBoton();
}
export default Cosa9;
