const admin = () => <p>Soy un admin</p>;
const invitado = () => <p>Soy un invitado</p>;

function Cosa3() {
  const esAdmin = false;
  return esAdmin ? admin() : invitado();
}
export default Cosa3;
