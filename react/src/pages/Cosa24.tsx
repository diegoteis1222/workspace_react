import { useRef, useState } from "react";

function DraggableBox() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [dragging, setDragging] = useState(false);

  let offsetRef = useRef({ x: 0, y: 0 });

  function handleMouseDown(e) {
    setDragging(true);

    offsetRef.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };

    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);
  }

  function handleMouseUp(e) {
    setDragging(false);

    document.removeEventListener("mousemove", handleMouseMove);
    document.removeEventListener("mouseup", handleMouseUp);
  }

  function handleMouseMove(e) {
    const newX = e.clientX - offsetRef.current.x;
    const newY = e.clientY - offsetRef.current.y;
    setPosition({ x: newX, y: newY });
  }

  return (
    <div
      style={{
        backgroundColor: "#8c8c8c",
        width: "1000px",
        height: "500px",
        position: "relative",
      }}
    >
      <div
        style={{
          backgroundColor: dragging ? "#FAC898" : "#b90707ff",
          position: "absolute",
          width: 100,
          height: 100,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "black",
          userSelect: "none",
          cursor: dragging ? "grabbing" : "grab",
          borderRadius: 8,
          top: position.y,
          left: position.x,
        }}
        onMouseDown={handleMouseDown}
      >
        cajaTexto
      </div>
    </div>
  );
}

function Cosa24() {
  return (
    <div>
      <h2>Cosa 24</h2>
      <DraggableBox />
    </div>
  );
}
export default Cosa24;
