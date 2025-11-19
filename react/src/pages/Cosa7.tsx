import { useState } from "react";

function Cosa7() {
  const [numero, setNumero] = useState(0);

  function handleClick() {
    setNumero(numero + 1);
    console.log(numero);
  }
  return <div onClick={handleClick}>{numero}</div>;
}
export default Cosa7;
