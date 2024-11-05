import React, { useState } from 'react';
import "./App.scss"

function App() {
  const [targetNumber, setTargetNumber] = useState(generateRandomNumber());
  const [guess, setGuess] = useState('');
  const [feedback, setFeedback] = useState('');
  const [attempts, setAttempts] = useState(0);

  function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
  }

  const handleGuessChange = (event) => {
    setGuess(event.target.value);
  };

  const handleGuessSubmit = (event) => {
    event.preventDefault();
    const guessNumber = parseInt(guess, 10);
    setAttempts(attempts + 1);

    if (guessNumber < targetNumber) {
      setFeedback('Too low!');
    } else if (guessNumber > targetNumber) {
      setFeedback('Too high!');
    } else {
      setFeedback(`Correct! You guessed it in ${attempts + 1} attempts.`);
    }

    setGuess(''); // Clear input field
  };

  const handleReset = () => {
    setTargetNumber(generateRandomNumber());
    setGuess('');
    setFeedback('');
    setAttempts(0);
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>Guess the Number</h1>
      <p>I'm thinking of a number between 1 and 100. Can you guess it?</p>
      <form onSubmit={handleGuessSubmit}>
        <input
          type="number"
          value={guess}
          onChange={handleGuessChange}
          min="1"
          max="100"
          placeholder="Enter your guess"
          required
        />
        <button type="submit">Guess</button>
      </form>
      <p>{feedback}</p>
      {feedback.includes('Correct') && (
        <button onClick={handleReset}>Play Again</button>
      )}
    </div>
  );
}

export default App;
