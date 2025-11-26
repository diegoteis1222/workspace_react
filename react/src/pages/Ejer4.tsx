import { use, useEffect, useState } from "react";

function Ejer4() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      <h2>Ejer4 </h2>
      {visible && <div>Ahora me ves</div>}
      <button onClick={() => setVisible(!visible)}>Boton</button>
    </div>
  );
}
export default Ejer4;
