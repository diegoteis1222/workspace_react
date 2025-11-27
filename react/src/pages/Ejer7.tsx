import { useState } from "react";

const url =
  "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd";

function Ejer7() {
  const [price, setPrice] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function bitcoinPrice() {
    setLoading(true);
    setError(null);
    try {
      const response = await fetch(url);
      if (!response.ok)
        throw new Error("Fallo al llamar a la api" + response.status);
      const data = await response.json();
      setPrice(data.bitcoin.usd);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div>
      <h2>Ejer7</h2>

      <button onClick={bitcoinPrice}>Precio Bitcoin</button>

      {loading && <p>Cargando...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {price !== null && <p>BTC: {price} USD</p>}
    </div>
  );
}
export default Ejer7;
