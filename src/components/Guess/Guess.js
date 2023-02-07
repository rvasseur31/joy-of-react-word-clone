import React from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

function Guess({ guesses }) {
  function renderGuessResults() {
    return guesses.map((guess, guessIndex) => (
      <p key={guessIndex} className="guess">
        {guess.map(({ status, letter }, letterIndex) => (
          <span key={letterIndex} className={`cell ${status}`}>
            {letter}
          </span>
        ))}
      </p>
    ));
  }

  function renderEmptyGuess() {
    return [...Array(NUM_OF_GUESSES_ALLOWED - guesses.length).keys()].map(
      (index) => (
        <p key={index} className="guess">
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
          <span className="cell"></span>
        </p>
      )
    );
  }
  return (
    <div className="guess-results">
      {renderGuessResults()}
      {renderEmptyGuess()}
    </div>
  );
}

export default Guess;
