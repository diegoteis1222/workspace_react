import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <Link to="/">Home</Link>
        <Link to="/Cosa1">Cosa1</Link>
        <Link to="/Cosa2">Cosa2</Link>
        <Link to="/Cosa3">Cosa3</Link>
        <Link to="/Cosa4">Cosa4</Link>
      </ul>
    </nav>
  );
}
export default Menu;
