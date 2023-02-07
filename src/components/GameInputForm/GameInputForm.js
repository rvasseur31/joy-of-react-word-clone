import React, { useState } from "react";

function GameInputForm({ isFinish, onSubmitNewGuess }) {
  const [guess, setGuess] = useState("");

  function sumbit(event) {
    event.preventDefault();
    if (guess.length !== 5) return;
    onSubmitNewGuess(guess);
    setGuess("");
  }
  return (
    <form className="guess-input-wrapper" onSubmit={sumbit}>
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        disabled={isFinish}
        id="guess-input"
        type="text"
        onChange={(event) => setGuess(event.target.value.toUpperCase())}
        value={guess}
      />
    </form>
  );
}

export default GameInputForm;
