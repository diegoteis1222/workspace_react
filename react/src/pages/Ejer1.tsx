interface Props {
  grados: number;
}


function Conversor({ grados }: Props) {
  const aFahrenheit = (celsius: number): number => (celsius * 9) / 5 + 32;

  const gradosFahrenheit = aFahrenheit(grados);

  return (
    <p>
      {grados}° Celsius equivalen a {gradosFahrenheit.toFixed(2)}° Fahrenheit.
    </p>
  );
}

function Ejer1() {
  return (
    <div>
      <Conversor grados={0} />
      <Conversor grados={25} />
    </div>
  );
}

export default Ejer1;