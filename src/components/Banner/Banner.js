import React from "react";

function Banner({ children, isGameOver, restart }) {
  const className = isGameOver ? "sad banner" : "happy banner";
  return (
    <div className={className}>
      <p>{children}</p>
      <button onClick={restart}>Restart</button>
    </div>
  );
}

export default Banner;
