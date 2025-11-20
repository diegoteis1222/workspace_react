import React from "react";

function Cosa10({ initialValue = 200 }) {
  const [count, setCount] = React.useState(initialValue);

  function handleIncrement() {
    setCount(count + 1);
  }
  function handleDecrement() {
    setCount(count - 1);
  }

  return (
    <div>
      <button onClick={handleIncrement}>Incrementar</button>
      <button onClick={handleDecrement}>Decrementar</button>
      <div>{count}</div>
    </div>
  );
}
export default Cosa10;
