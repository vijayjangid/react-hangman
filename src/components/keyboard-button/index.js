import { memo } from "react";
import "./style.css";
const KeyboardButton = memo(({ text, value, disabled, onClick }) => {
  const label = text || value;
  return (
    <button
      className={`keyboard-button skeuo ${disabled && "invert disabled"}`}
      value={value}
      onClick={onClick}
      disabled={disabled}
    >
      {label}
    </button>
  );
});

export default KeyboardButton;
