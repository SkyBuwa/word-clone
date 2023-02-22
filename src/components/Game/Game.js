import React from "react";

import { sample } from "../../utils";
import { WORDS } from "../../data";
import GuessInput from "../GuessInput";
import UserGuesses from "../UserGuesses";

// Pick a random word on every pageload.
const answer = sample(WORDS);
// To make debugging easier, we'll log the solution in the console.
console.info({ answer });

function Game() {
  const [guessList, setGuessList] = React.useState([]);

  const handleSubmit = (guess) => {
    const guessObj = {
      guess,
      key: Math.random(),
    };
    console.log(`user input ${JSON.stringify(guessObj)}`);
    const nextGuessList = [...guessList, guessObj];
    setGuessList(nextGuessList);
  };

  return (
    <>
      {guessList.length > 0 && <UserGuesses guessList={guessList} />}
      <GuessInput handleSubmit={handleSubmit} />
    </>
  );
}

export default Game;
