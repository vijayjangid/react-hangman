import "./style.css";
import { GAME_RESULT } from "../../constants";

export default function Result({ result, guessword }) {
  let resultClass = "",
    resultText = "😊";

  if (result === GAME_RESULT.WON) {
    resultClass = "success";
    resultText = "🥳 Congratulations!!! You WON.";
  } else if (result === GAME_RESULT.LOST) {
    resultClass = "error";
    resultText = `😞 Oops!!! You Lost. The word was '${guessword}'`;
  } else {
    return null;
  }

  return (
    <div className={`neumorph invert disabled result ${resultClass}`}>
      {resultText}
    </div>
  );
}
