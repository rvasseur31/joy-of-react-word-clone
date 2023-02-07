import React from "react";
import Banner from "../Banner/Banner";

function EndGameBanner({
  isFinish,
  isGameOver,
  guessesLenght,
  answer,
  restart,
}) {
  if (!isFinish) return null;
  if (isGameOver) {
    return (
      <Banner isGameOver={isGameOver} restart={restart}>
        Sorry, the correct answer is <strong>{answer}</strong>.
      </Banner>
    );
  }
  return (
    <Banner isGameOver={isGameOver} restart={restart}>
      <strong>Congratulations!</strong> Got it in
      <strong> {guessesLenght} guesses</strong>.
    </Banner>
  );
}

export default EndGameBanner;
