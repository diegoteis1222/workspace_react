import React from "react";

function Ejer5() {
  const [numero, setNumero] = React.useState<number | null>(null);

  const handleCambioNumero = () => {
    setNumero(Math.floor(Math.random() * 6 + 1));
  };

  return (
    <div>
      <h2>Ejer5 </h2>
      <button onClick={handleCambioNumero}>Dado</button>
      <div>Numero: {numero}</div>
    </div>
  );
}
export default Ejer5;
