import { use, useState } from "react";

function useCounter() {
  const [count, setCount] = useState(0);

  function handleIncrement() {
    setCount(count + 1);
  }

  function handleDecrement() {
    setCount(count - 1);
  }

  function handleReset() {
    setCount(0);
  }

  return { count, handleIncrement, handleDecrement, handleReset };
}

function Cosa20() {
  const {
    count,
    handleIncrement: incrementar,
    handleDecrement: decrementar,
    handleReset: reiniciar,
  } = useCounter();

  return (
    <div>
      <h2>Cosa20</h2>

      <button onClick={incrementar}>Incrementar</button>
      <button onClick={reiniciar}>Resetear</button>
      <button onClick={decrementar}>Decrementar</button>
      <div>Count: {count}</div>
    </div>
  );
}
export default Cosa20;
