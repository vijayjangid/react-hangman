import "./style.css";

export default function Stage({ step, wordSource }) {
  return (
    <div className="stage">
      <HangmanSVG step={step} />
      <label>Guess the {wordSource} ...</label>
      <small>
        (you can also use keyboard, press [space] or [enter] to reset)
      </small>
    </div>
  );
}

function getDisplayValue(step, target) {
  return step > target ? "inline" : "none";
}
function HangmanSVG({ step }) {
  return (
    <svg height="100" width="100" viewBox="0 0 300 300" strokeWidth="4">
      <g id="head" display={getDisplayValue(step, 0)}>
        <circle cx="200" cy="80" r="20" fill="none" />
        {/* <g id="eyes">
            <circle cx="193" cy="80" r="4" />
            <circle cx="207" cy="80" r="4" />
          </g> */}
        <g
          display={getDisplayValue(step, 6)}
          strokeWidth="3"
          strokeLinecap="square"
        >
          <line x1="190" y1="78" x2="196" y2="84" />
          <line x1="204" y1="78" x2="210" y2="84" />
          <line x1="190" y1="84" x2="196" y2="78" />
          <line x1="204" y1="84" x2="210" y2="78" />
        </g>
      </g>
      <g id="body" strokeLinecap="butt">
        <line
          display={getDisplayValue(step, 1)}
          x1="200"
          y1="100"
          x2="200"
          y2="130"
        />
        <line
          display={getDisplayValue(step, 2)}
          x1="200"
          y1="100"
          x2="170"
          y2="110"
        />
        <line
          display={getDisplayValue(step, 3)}
          x1="200"
          y1="100"
          x2="230"
          y2="110"
        />
        <line
          display={getDisplayValue(step, 4)}
          x1="200"
          y1="130"
          x2="180"
          y2="160"
        />
        <line
          display={getDisplayValue(step, 5)}
          x1="200"
          y1="130"
          x2="220"
          y2="160"
        />
      </g>
      <g id="pole-rope" strokeWidth="10" strokeLinecap="round">
        <line x1="50" y1="250" x2="250" y2="250" />
        <line x1="100" y1="250" x2="100" y2="20" />
        <line id="h-beam" x1="100" y1="20" x2="220" y2="20" />
        <line
          id="x-beam"
          strokeLinecap="butt"
          x1="100"
          y1="70"
          x2="150"
          y2="20"
        />
        <line
          strokeWidth="4"
          strokeDasharray="6,6"
          x1="200"
          y1="20"
          x2="200"
          y2="60"
        />
      </g>
    </svg>
  );
}
