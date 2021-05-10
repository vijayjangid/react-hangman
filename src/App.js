import { Footer, Header } from "./components";
import { useDarkMode } from "./hooks";
import Hangman from "./containers/hangman";
import { WordsourceContextProvider } from "./state/wordsource-context";

function App() {
  const { darkMode } = useDarkMode();
  const themeClass = darkMode ? "dark app" : "app";
  return (
    <WordsourceContextProvider>
      <div className={themeClass}>
        <div className="container">
          <Header />
          <Hangman />
          <Footer />
        </div>
      </div>
    </WordsourceContextProvider>
  );
}

export default App;
