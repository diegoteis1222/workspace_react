import { useState } from "react";

function Cosa18() {
  const [name, setName] = useState("Diego");

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    setName(event.target.value);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Formulario enviado");
  }

  return (
    <div>
      <h2>Cosa18</h2>
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Nombre:
          <input type="text" value={name} onChange={handleChangeName} />
        </label>
        <button type="submit">Enviar</button>
      </form>
      <p>Hola, {name}!</p>
    </div>
  );
}
export default Cosa18;
