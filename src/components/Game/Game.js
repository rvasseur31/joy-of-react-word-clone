import React, { useEffect, useState } from "react";
import { NUM_OF_GUESSES_ALLOWED } from "../../constants";

import { WORDS } from "../../data";
import { sample } from "../../utils";
import { checkGuess } from "../../game-helpers";
import GameInputForm from "../GameInputForm/GameInputForm";
import Guess from "../Guess/Guess";
import EndGameBanner from "../EndGameBanner/EndGameBanner";
import Keyboard from "../Keyboard/Keyboard";

function Game() {
  const [guesses, setGuesses] = React.useState([]);
  const [isFinish, setIsFinish] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [answer, setAnswer] = useState(sample(WORDS));
  const [keyboardGuess, setKeyboardGuess] = useState({});

  useEffect(() => {
    console.info(answer);
  }, [answer]);

  function checkKeyboardLetter(newGuess) {
    const nextKeyboardGuess = { ...keyboardGuess };
    newGuess.forEach((element) => {
      if (nextKeyboardGuess[element.letter]) {
        if (nextKeyboardGuess[element.letter] === "correct") return;
        if (nextKeyboardGuess[element.letter] === "incorrect") return;
        nextKeyboardGuess[element.letter] = element.status;
      } else {
        nextKeyboardGuess[element.letter] = element.status;
      }
    });
    setKeyboardGuess(nextKeyboardGuess);
  }

  function onSubmitNewGuess(guess) {
    const newGuess = checkGuess(guess, answer);
    const nextGuesses = [...guesses, newGuess];
    checkKeyboardLetter(newGuess);
    setGuesses(nextGuesses);
    if (guess === answer) {
      setIsGameOver(false);
      setIsFinish(true);
    }
    if (nextGuesses.length === NUM_OF_GUESSES_ALLOWED) {
      setIsGameOver(true);
      setIsFinish(true);
    }
  }

  function restart() {
    setGuesses([]);
    setIsFinish(false);
    setIsGameOver(false);
    setAnswer(sample(WORDS));
  }

  return (
    <>
      <Guess guesses={guesses} />
      <GameInputForm isFinish={isFinish} onSubmitNewGuess={onSubmitNewGuess} />
      <Keyboard keyboardGuess={keyboardGuess} />
      <EndGameBanner
        isFinish={isFinish}
        isGameOver={isGameOver}
        guessesLenght={guesses.length}
        answer={answer}
        restart={restart}
      />
    </>
  );
}

export default Game;
