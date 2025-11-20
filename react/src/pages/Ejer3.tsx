import { useState } from "react";

interface Props {
  numero1: number;
  numero2: number;
  operacion: "sumar" | "restar" | "multiplicar" | "dividir";
}

function Calculator({ numero1, numero2, operacion }: Props) {
  function sumar() {
    return numero1 + numero2;
  }
  function restar() {
    return numero1 - numero2;
  }
  function multiplicar() {
    return numero1 * numero2;
  }
  function dividir() {
    return numero1 / numero2;
  }

  return operacion === "sumar"
    ? sumar()
    : operacion === "restar"
    ? restar()
    : operacion === "multiplicar"
    ? multiplicar()
    : dividir();
}

function Ejer3() {
  const [numero1, setNumero1] = useState(0);
  const [numero2, setNumero2] = useState(0);
  const [operacion, setOperacion] = useState<
    "sumar" | "restar" | "multiplicar" | "dividir"
  >("sumar");

  return (
    <div>
      <h1>Calculadora</h1>
      <h2>Escribe sumar, restar, multiplicar o dividir</h2>


      <input
        type="text"
        value={numero1}
        onChange={(e) => setNumero1(Number(e.target.value))}
        placeholder="Número 1"
      />

      <input
        type="text"
        value={operacion}
        onChange={(e) =>
          setOperacion(
            e.target.value as "sumar" | "restar" | "multiplicar" | "dividir"
          )
        }
        placeholder="operacion"
      />

      <input
        type="text"
        value={numero2}
        onChange={(e) => setNumero2(Number(e.target.value))}
        placeholder="Número 2"
      />

      <p>Resultado: {Calculator({ numero1, numero2, operacion })}</p>
    </div>
  );
}

export default Ejer3;
