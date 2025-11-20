interface Props {
  mensaje: string;
  color: string;
  ModoFormateo?: (texto: string) => string;
}

function MiComponente({ mensaje, color, ModoFormateo }: Props) {
  return <div style={{ color }}> dijiste: {mensaje}</div>;
}

function Cosa6() {
  const formatearTextoMayus = (texto: string) => {
    return texto.toUpperCase();
  };

  return (
    <MiComponente
      mensaje="Cebem"
      color="red"
      ModoFormateo={formatearTextoMayus}
    />
  );
}
export default Cosa6;
