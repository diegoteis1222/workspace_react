import React from "react";
import { useEffect } from "react";

function Cosa17() {
  const [count, setCount] = React.useState(0);

  useEffect(() => {
    setCount(count + 1);
    console.log("SIUUUUUUUUUUUUU");
  }, []);

  return (
    <div>
      <h2>Cosa17 </h2>
      <div>Count: {count}</div>
    </div>
  );
}

export default Cosa17;
