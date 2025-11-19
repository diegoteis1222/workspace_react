import type React from "react";

interface Props {
  children: React.ReactNode;
}

function MiComponente({ children }: Props) {
  return <div>{children}</div>;
}

function Cosa8() {
  return (
    <MiComponente>
      <strong>sexo fuerte</strong>
    </MiComponente>
  );
}

export default Cosa8;