import { useParams } from "react-router-dom";

function Cosa21() {
  const { id } = useParams();

  return (
    <div>
      <h2>Cosa21</h2>
      <p>mostrar cosa {id}</p>
    </div>
  );
}
export default Cosa21;
