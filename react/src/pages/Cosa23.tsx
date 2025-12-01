import { ThemeContext } from "../contexts/ThemeContext";

function A(backgroundColor) {

const theme = useContext(ThemeContext);
  return <p>AAAAAAAAAAAAAAAAAAAAAAAA</p>;
}

function B(backgroundColor) {
  return <p>BBBBBBBBBBBBBBBBBBBBBBBB</p>;
}
function cosa23() {
  return (
    <div>
      <h2>Cosa 23</h2>
        <BackgroundContext>
            <A />
            <B />
        </BackgroundContext>
    </div>
  );
}

export default cosa23;
