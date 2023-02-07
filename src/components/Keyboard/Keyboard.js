import React from "react";

const colorMap = {
  correct: "hsl(150deg 70% 30%)",
  incorrect: "hsl(0deg 0% 25%)",
  misplaced: "hsl(50deg 100% 30%)",
  default: "#D4D6DA",
};

function KeyboardItem({ children, color = colorMap.default }) {
  return (
    <div
      style={{
        backgroundColor: color,
        borderColor: color,
        borderRadius: 8,
        padding: 12,
      }}
    >
      {children}
    </div>
  );
}

function Keyboard({ keyboardGuess }) {
  console.log(keyboardGuess);
  const layout = ["azertyuiop", "qsdfghjklm", "wxcvbn"];
  return layout.map((row, rowIndex) => {
    return (
      <div
        key={rowIndex}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        {row.split("").map((letter) => {
          return (
            <KeyboardItem
              key={letter}
              color={colorMap[keyboardGuess[letter.toUpperCase()]]}
            >
              {letter}
            </KeyboardItem>
          ); // Letter is unique
        })}
      </div>
    );
  });
}

export default Keyboard;
