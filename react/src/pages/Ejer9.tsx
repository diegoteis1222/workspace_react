import { useState, type ChangeEvent, type FormEvent } from "react";

export default function Ejer9() {
  const [form, setForm] = useState({
    num1: 0,
    num2: 0,
  });

  const [resultado, setResultado] = useState<null>(null);

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    setForm({
      ...form,
      [name]: Number(value),
    });
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    try {
      const response = await fetch("http://127.0.0.1:5000/api/suma", {
        method: "POST",
        body: JSON.stringify(form),
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`Error en la peticion`);
      }

      const data = await response.json();
      setResultado(data.resultado);

    } catch (error) {
      console.error("Error de red o en la solicitud:", error);
    }
  }
  return (
    <div>
      <h1>Ejercicio 9</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          Número 1:
          <input type="number" name="num1" value={form.num1} onChange={handleChange} />
        </label>
        <br />
        <label>
          Número 2:
          <input type="number" name="num2" value={form.num2} onChange={handleChange} />
        </label>
        <br />
        <br />
        <button>Sumar</button>
      </form>
      <div>Resultado: {resultado} </div>
    </div>
  );
}
