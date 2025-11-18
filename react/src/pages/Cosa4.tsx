interface Props {
  palabra: string;
  size: number;
}

function MiComponente({ palabra, size }: Props) {
  return <div> AAAAAAAAAAAAAAAAAAAAAAAAAAH {palabra} NUMERO {size}</div>;
}

function Cosa4() {
  return <MiComponente palabra="MARICAAAAAAAAA" size={10} />;
}
export default Cosa4;
