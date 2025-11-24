import { useEffect, useState } from "react";

function Cosa16() {
  const [myKey, setMyKey] = useState("");

  function controlTecla(event: KeyboardEvent) {
    console.log("Se pulso una tecla lol" + event.key);
    setMyKey(event.key);
  }

  useEffect(() => {
    window.addEventListener("keydown", controlTecla);
    return () => {
      window.removeEventListener("keydown", controlTecla);
    };
  }, []);

  return (
    <div>
      <h2>Cosa16 </h2>
      <div>Tecla pulsada: {myKey}</div>
    </div>
  );
}

export default Cosa16;
