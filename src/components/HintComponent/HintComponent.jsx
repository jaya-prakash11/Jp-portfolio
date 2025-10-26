import React from "react";

function HintComponent({ title }) {
  return (
    <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
      <p className="hint">{title}</p>
    </div>
  );
}

export default HintComponent;
