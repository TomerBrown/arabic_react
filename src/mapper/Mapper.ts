import { oneToOneMapping } from "./lettersMapping";
import specialSuffixes from "./specialSuffixes";
import { wordMapping } from "./wordsMapping";

export function mapArabicToHebrewLetters(input: string): string {
  const translatedWords: string[] = [];
  const words = input.split(" ");
  words.forEach((word) => translatedWords.push(mapWord(word)));
  return translatedWords.join(" ");
}

function mapWord(word: string): string {
  // First we try to match the whole word
  if (wordMapping.has(word)) {
    return wordMapping.get(word) || "";
  }

  // Then we try to match special suffixes.
  const { suffix, updatedWord } = specialSuffixes(word);
  word = updatedWord;

  // Otherwise we fallback to mapping each letter individually.
  const wordBeginingHebrew = word
    .split("")
    .map((char) => oneToOneMapping.get(char) || char)
    .join("");

  // If we have a suffix, we append it to the word.
  return wordBeginingHebrew + suffix;
}
