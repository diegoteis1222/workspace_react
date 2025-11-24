import React from "react";

interface Pokemon {
  name: string;
}

function Cosa15() {
  const [pokemons, setPokemons] = React.useState<Pokemon[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  async function loadPokemons() {
    const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
    const data = await response.json();
    setPokemons(data.results);
  }

  React.useEffect(() => {
    try {
      loadPokemons();
    } catch (e) {
      setError(true);
    } finally {
      setLoading(false);
    }
  }, []);

  if (loading) {
    return <div>Cargando...</div>;
  }
  if (error) {
    return <div>Error al cargar los pokemons</div>;
  }
  
  return (
    <div>
      <h2>Cosa15 </h2>
      {pokemons &&
        pokemons.map((pokemon) => <div key={pokemon.name}>{pokemon.name}</div>)}
    </div>
  );
}
export default Cosa15;
