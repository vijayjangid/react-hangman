import { memo, useCallback, useEffect } from "react";
import KeyboardButton from "../keyboard-button";
import "./style.css";

const keys = "abcdefghijklmnopqrstuvwxyz".split("");
const Keyboard = memo(({ onKeyClick, onReset, disabledKeys }) => {
  const handleKeyOnClick = useCallback(
    (event) => {
      onKeyClick(event.target.value);
    },
    [onKeyClick]
  );

  const handleKeyOnPress = useCallback(
    (event) => {
      event.preventDefault();
      /**
       * RESET
       * 8 = backspace
       * 13 = enter
       * 32 = space
       *
       * NORMAL
       * 65 = A (Capital)
       * 90 = Z (Capital)
       * 97 = a (Small)
       * 122 = z (Small)
       */
      const code = event.keyCode || event.which;
      if (code === 8 || code === 13 || code === 32) {
        onReset();
      } else if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
        onKeyClick(event.key);
      }
    },
    [onKeyClick, onReset]
  );

  useEffect(() => {
    document.addEventListener("keyup", handleKeyOnPress);
    return () => document.removeEventListener("keyup", handleKeyOnPress);
  }, [handleKeyOnPress]);

  return (
    <div className="keyboard">
      <div className="letters">
        {keys.map((key) => (
          <KeyboardButton
            key={key}
            value={key}
            disabled={disabledKeys.includes(key)}
            onClick={handleKeyOnClick}
          />
        ))}
      </div>
      <KeyboardButton value="reset" text="Reset" onClick={onReset} />
    </div>
  );
});

export default Keyboard;
