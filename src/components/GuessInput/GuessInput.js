import React from "react";

function GuessInput({ handleSubmit }) {
  const [inputValue, setInputValue] = React.useState("");

  return (
    <form
      className="guess-input-wrapper"
      onSubmit={(event) => {
        event.preventDefault();
        handleSubmit(inputValue);
        setInputValue("");
      }}
    >
      <label htmlFor="guess-input">Enter guess:</label>
      <input
        id="guess-input"
        type="text"
        value={inputValue}
        onChange={(event) => setInputValue(event.target.value.toUpperCase())}
        maxLength={5}
        minLength={5}
      />
    </form>
  );
}

export default GuessInput;
