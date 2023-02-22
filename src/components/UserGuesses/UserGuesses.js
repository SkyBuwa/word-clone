import React from "react";

function UserGuesses({ guessList }) {
  return (
    <div className="guess-results">
      {guessList.map(({ guess, key }) => (
        <p className="guess" key={key}>
          {guess}
        </p>
      ))}
    </div>
  );
}

export default UserGuesses;
