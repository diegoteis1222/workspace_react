function MiComponente() {
  return <div> Componente </div>;
}

function Cosa2() {
  return (
    <div>
      desde Cosa2
      <MiComponente />
    </div>
  );
}
export default Cosa2;
