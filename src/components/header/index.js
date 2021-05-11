import { useCallback } from "react";
import useWordSource from "../../hooks/use-word-source-hook";
import ThemeToggle from "../theme-toggle";
import "./style.css";

export default function Header() {
  const { wordsource, wordsources, setWordsource } = useWordSource();
  const handleWordsourceChange = useCallback(
    (e) => {
      setWordsource(e.target.value);
    },
    [setWordsource]
  );

  return (
    <header className="header">
      <nav>
        <a href="/" className="logo neumorph">
          <img src="images/logo.svg" alt="Hangman logo" />
          <div>
            <h1>Hangman</h1>
            <small>for programmers</small>
          </div>
        </a>
        <ul>
          <li>
            <label htmlFor="wordsource">Word source:</label>
            <select
              id="wordsource"
              className="neumorph"
              type="text"
              placeholder="Choose a word source"
              value={wordsource}
              onChange={handleWordsourceChange}
            >
              {wordsources.map((source) => (
                <option key={source}>{source}</option>
              ))}
            </select>
          </li>
          <li>
            <span role="button" className="neumorph">
              <ThemeToggle />
            </span>
          </li>
        </ul>
      </nav>
    </header>
  );
}
