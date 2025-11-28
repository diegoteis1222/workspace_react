import { Link } from "react-router-dom";

function Menu() {
  return (
    <nav>
      <ul>
        <Link to="/">Home </Link>
        <li>
          {" "}
          <Link to="/Cosa1">Cosa1 </Link>
          <Link to="/Cosa2">Cosa2 </Link>
          <Link to="/Cosa3">Cosa3 </Link>
          <Link to="/Cosa4">Cosa4 </Link>
          <Link to="/Cosa5">Cosa5 </Link>
          <Link to="/Cosa6">Cosa6 </Link>
          <Link to="/Cosa7">Cosa7 </Link>
          <Link to="/Cosa8">Cosa8 </Link>
          <Link to="/Cosa9">Cosa9 </Link>
          <Link to="/Cosa10">Cosa10 </Link>
        </li>
        <li>
          {" "}
          <Link to="/Cosa11">Cosa11 </Link>
          <Link to="/Cosa12">Cosa12 </Link>
          <Link to="/Cosa13">Cosa13 </Link>
          <Link to="/Cosa14">Cosa14 </Link>
          <Link to="/Cosa15">Cosa15 </Link>
          <Link to="/Cosa16">Cosa16 </Link>
          <Link to="/Cosa17">Cosa17 </Link>
          <Link to="/Cosa18">Cosa18 </Link>
          <Link to="/Cosa19">Cosa19 </Link>
          <Link to="/Cosa20">Cosa20 </Link>
        </li>

        <li>
          {" "}
          <Link to="/Cosa21">Cosa21 </Link>
        </li>

        <li>
          {" "}
          <Link to="/Ejer1">Ejer1 </Link>
          <Link to="/Ejer2">Ejer2 </Link>
          <Link to="/Ejer3">Ejer3 </Link>
          <Link to="/Ejer4">Ejer4 </Link>
          <Link to="/Ejer5">Ejer5 </Link>
          <Link to="/Ejer6">Ejer6 </Link>
          <Link to="/Ejer7">Ejer7 </Link>
          <Link to="/Ejer8">Ejer8 </Link>
        </li>
      </ul>
    </nav>
  );
}
export default Menu;
