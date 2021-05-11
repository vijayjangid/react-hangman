import "./style.css";
function GuessLetter({ letter, rightGuesses }) {
  return (
    <span className={`guess-letter neumorph invert disabled`}>
      {rightGuesses.includes(letter) ? letter : "-"}
    </span>
  );
}
export default function Guessword({ rightGuesses, guessword }) {
  return (
    <div className="guessword">
      {guessword.split("").map((letter, index) => (
        <GuessLetter
          key={letter + index}
          letter={letter}
          rightGuesses={rightGuesses}
        />
      ))}
    </div>
  );
}
