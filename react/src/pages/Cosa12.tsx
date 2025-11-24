import React, { useState } from "react";

function Contador() {
  const [contador, setContador] = useState(0);

  function handleClick() {
    setContador(contador + 1);
  }

  return <button onClick={handleClick}>Contador: {contador}</button>;
}

function Cosa12() {
  return (
    <div>
      <h2>Cosa12 </h2>
      <Contador />
    </div>
  );
}

export default Cosa12;
