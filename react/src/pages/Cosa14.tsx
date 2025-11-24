import { use, useEffect, useState } from "react";

function Cosa14() {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setContador((prevContador) => prevContador + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Cosa14 </h2>
      <div>Contador: {contador}</div>
    </div>
  );
}

export default Cosa14;
