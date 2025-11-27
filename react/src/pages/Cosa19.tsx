import { useState } from "react";

function Cosa18() {
  const [form, setForm] = useState({
    name: "Diego",
    surname: "Perez",
    email: " ",
  });

  function handleChangeName(event: React.ChangeEvent<HTMLInputElement>) {
    const [value, name] = event.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    console.log("Formulario enviado");
  }

  return (
    <div>
      <h2>Cosa18</h2>
      <br />
      <form onSubmit={handleSubmit}>
        <label>
          {" "}
          Nombre:
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChangeName}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Apellido:
          <input
            type="text"
            name="surname"
            value={form.surname}
            onChange={handleChangeName}
          />
        </label>
        <br />
        <br />
        <label>
          {" "}
          Email:
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChangeName}
          />
        </label>
        <br />
        <br />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
}
export default Cosa18;
