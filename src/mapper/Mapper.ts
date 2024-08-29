import { oneToOneMapping } from "./lettersMapping";
import specialSuffixes from "./specialSuffixes";
import { wordMapping } from "./wordsMapping";

export function mapArabicToHebrewLetters(input: string): string {
  const translatedWords: string[] = [];
  input = preProcessInput(input);
  const sequence = splitArabicSentence(input);
  sequence.forEach((word) =>
    word.type === "word"
      ? translatedWords.push(mapWord(word.word))
      : translatedWords.push(word.word)
  );

  return translatedWords.join("");
}

function splitArabicSentence(input: string): { word: string; type: string }[] {
  const result: { word: string; type: string }[] = [];

  // Regular expression to match Arabic words, the Arabic question mark (U+061F), and other separators
  const regex = /([\u0600-\u061F]|[\u0620-\u06FF]+)|(؟)|([^\u0600-\u06FF؟]+)/g;

  let match;
  while ((match = regex.exec(input)) !== null) {
    if (match[1]) {
      // If the first capturing group (Arabic words) matches
      result.push({ word: match[1], type: "word" });
    } else if (match[2]) {
      // If the second capturing group (Arabic question mark) matches
      result.push({ word: match[2], type: "word" });
    } else if (match[3]) {
      // If the third capturing group (separators including spaces) matches
      result.push({ word: match[3], type: "separator" });
    }
  }

  return result;
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
