import { oneToOneMapping } from "./lettersMapping";
import { wordMapping } from "./wordsMapping";

export function mapArabicToHebrewLetters(input: string): string {
  const translatedWords: string[] = [];
  const words = input.split(" ");
  words.forEach((word) => translatedWords.push(mapWord(word)));
  return translatedWords.join(" ");
}

function mapWord(word: string): string {

    if (wordMapping.has(word)) {
        return wordMapping.get(word) || "";
    }

    let suffix = "";
    if (word.endsWith("وا")) {
        suffix = "ו"
        word = word.slice(0, -2);
    }
    if (word.endsWith("ه")) {
        suffix = "ו"
        word = word.slice(0, -1);
    }

    const wordBeginingHebrew = word.split("").map((char) => oneToOneMapping.get(char) || char).join("");
    return  wordBeginingHebrew + suffix;
}


