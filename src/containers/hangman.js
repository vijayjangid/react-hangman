import { useCallback, useEffect, useState } from "react";
import { Guessword, Keyboard, Stage } from "../components";
import useWordSource from "../hooks/use-word-source-hook";
import { MAX_WRONG_GUESSES, GAME_RESULT } from "../constants";
import "./style.css";
import Result from "../components/result";

export default function Hangman() {
  const { wordsource, guessword, resetGuessword } = useWordSource();
  const [rightGuesses, setRightGuesses] = useState([]);
  const [wrongGuesses, setWrongGuesses] = useState([]);
  const [result, setResult] = useState(GAME_RESULT.IN_PROGRESS);

  useEffect(() => {
    setRightGuesses([]);
    setWrongGuesses([]);
  }, [guessword]);

  useEffect(() => {
    if (guessword.split("").every((letter) => rightGuesses.includes(letter))) {
      setResult(GAME_RESULT.WON);
    } else if (wrongGuesses.length >= MAX_WRONG_GUESSES) {
      setResult(GAME_RESULT.LOST);
    } else {
      setResult(GAME_RESULT.IN_PROGRESS);
    }
  }, [guessword, rightGuesses, wrongGuesses]);

  const handleReset = useCallback(() => {
    resetGuessword();
  }, [resetGuessword]);

  const handleGuess = useCallback(
    (letter) => {
      console.log("letter", letter);
      // do not update when game is lost/won
      if (result !== GAME_RESULT.IN_PROGRESS) {
        return;
      }
      if (guessword.includes(letter)) {
        setRightGuesses((guesses) => {
          if (!guesses.includes(letter)) {
            return [...guesses, letter];
          }
          return guesses;
        });
      } else {
        setWrongGuesses((guesses) => {
          if (!guesses.includes(letter)) {
            return [...guesses, letter];
          }
          return guesses;
        });
      }
    },
    [result, guessword, setRightGuesses, setWrongGuesses]
  );

  return (
    <div className="hangman">
      <Stage step={wrongGuesses.length} wordSource={wordsource} />
      <Guessword rightGuesses={rightGuesses} guessword={guessword} />
      <Result result={result} guessword={guessword} />
      <Keyboard
        disabledKeys={rightGuesses.concat(wrongGuesses)}
        onReset={handleReset}
        onKeyClick={handleGuess}
      />
    </div>
  );
}
