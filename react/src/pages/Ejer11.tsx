/*
Crea un componente que tenga una caja de texto.
Cuando el usuario escriba un texto que tenga 5 caracteres, se mostrará 
un mensaje en la consola indicando: "¡Has escrito 5 caracteres!".

El componente también mostrará en pantalla (debajo de la caja de texto) 
el número de caracteres escritos en la caja de texto (length).
*/

import { useState } from "react";

function Ejer11() {
  const [contLetras, setContLetras] = useState("");

  return (
    <div>
      <input type="text" />
    </div>
  );
}
export default Ejer11;
