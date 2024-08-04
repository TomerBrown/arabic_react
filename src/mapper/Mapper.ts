export function mapArabicToHebrewLetters(input: string): string {
  const translatedWords: string[] = [];
  const words = input.split(" ");
  words.forEach((word) => translatedWords.push(mapWord(word)));
  return translatedWords.join(" ");
}

function mapWord(word: string): string {
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


const oneToOneMapping: Map<string, string> = new Map([
  ["ء", "א"],
  ["ا", "א"],
  ["ب", "בּ"],
  ["ت", "ת"],
  ["ث", "ת'"],
  ["ج", "ג'"],
  ["ح", "ח"],
  ["خ", "ח'"],
  ["د", "ד"],
  ["ذ", "ד'"],
  ["ر", "ר"],
  ["ز", "ז"],
  ["س", "ס"],
  ["ش", "ש"],
  ["ص", "צ"],
  ["ض", "צ'"],
  ["ط", "ט"],
  ["ظ", "ט'"],
  ["ع", "ע"],
  ["غ", "ע'"],
  ["ف", "פ"],
  ["ق", "ק"],
  ["ك", "כּ"],
  ["ل", "ל"],
  ["م", "מ"],
  ["ن", "נ"],
  ["ه", "ה"],
  ["و", "ו"],
  ["ي", "י"],
  ["ى", "א"],
  ["آ", "אַא"],
  ["ة", "ה"],
  ["إ", "א"],
  ["أ", "א"],
  ["ؤ", "ו"],
  ["ئ", "י"],
  ["؟", "?"],
]);
