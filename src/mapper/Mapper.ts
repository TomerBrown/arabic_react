import { oneToOneMapping } from "./lettersMapping";
import specialSuffixes from "./specialSuffixes";
import { wordMapping } from "./wordsMapping";

export function mapArabicToHebrewLetters(input: string): string {
  const translatedWords: string[] = [];
  input = preProcessInput(input);
  const words = input.split(" ");
  words.forEach((word) => translatedWords.push(mapWord(word)));
  return translatedWords.join(" ");
}
function preProcessInput(input: string): string {
  return input.replace(/( ً| ُ| ٌ| ِ| ٍ| ّ )/g, "");
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
  const completeHebrewWord = wordBeginingHebrew + suffix;
  // Adapt the last letter if needed.
  return adaptLastHebrewLetter(completeHebrewWord);
}

const adaptLastHebrewLetter = (word: string): string => {
  const lastLetter = word.slice(-1);
  const lastLetterMapping = new Map([
    ["מ", "ם"],
    ["נ", "ן"],
    ["פ", "ף"],
    ["צ", "ץ"],
  ]);

  let newLastLetter; 
  if (word.endsWith("כּ")) {
    word = word.slice(0, -2);
    newLastLetter = "ךּ";
  } else {
    newLastLetter = lastLetterMapping.get(lastLetter) || lastLetter;
    word = word.slice(0, -1);
  }
  
  return word.concat(newLastLetter);
};
