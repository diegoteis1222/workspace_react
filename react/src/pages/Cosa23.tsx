import { useContext } from "react";
import { ThemeContext, ThemeProvider } from "../contexts/ThemeContext";

function A() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ background: theme === "light" ? "#eee" : "#333", color: theme === "light" ? "#000" : "#fff" }}>
      AAAAAAAAAAAAAAAAAAAAAAAA — theme: {theme}
    </p>
  );
}

function B() {
  const { theme } = useContext(ThemeContext);

  return (
    <p style={{ background: theme === "light" ? "#ddd" : "#222", color: theme === "light" ? "#000" : "#fff" }}>
      BBBBBBBBBBBBBBBBBBBBBBBB — theme: {theme}
    </p>
  );
}

export default function Cosa23() {
  return (
    <div>
      <h2>Cosa 23</h2>

      <ThemeProvider>
        <Contenido />
      </ThemeProvider>
    </div>
  );
}

function Contenido() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <button
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        style={{
          padding: "8px 16px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Cambiar a {theme === "light" ? "oscuro" : "claro"}
      </button>

      <A />
      <B />
    </div>
  );
}
