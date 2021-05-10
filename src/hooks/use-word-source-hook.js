import { useContext } from "react";
import { WordsourceContext } from "../state/wordsource-context";

export default function useWordSource() {
  return useContext(WordsourceContext);
}
