const nombres = ["Ana", "Luis", "Carlos", "Marta"];

function Cosa11() {
  return (
    <div>
      <h2>Lista de Nombres</h2>
      <ul>
        {nombres.map((nombre) => (
          <li key={nombre}>{nombre.toUpperCase()}</li>
        ))}
      </ul>

      <br />

      <ul>
        {nombres.map((nombre, index) => (
          <li key={index}>{nombre.toUpperCase()}</li>
        ))}
      </ul>
    </div>
  );
}
export default Cosa11;
