export interface Mapping {
  suffix: string;
  updatedWord: string;
}

// This map contains the special suffixes that are used in Arabic words.
// note that the order does matter, as the first suffix that matches the
// word will be used.
const specialSuffixesMap = new Map<string, string>([
  ["لله", "ללה"],
  ["وا", "ו"],
  ["ه", "ו"],
]);

// This function is used to handle special suffixes in Arabic words.
// It returns an object with the updated word and the suffix.
// If the word does not have a special suffix, it returns the original word.
const specialSuffixes = (arabicWord: string): Mapping => {
  for (const [suffixArabic, suffixHebrew] of specialSuffixesMap) {
    if (arabicWord.endsWith(suffixArabic)) {
      return {
        suffix: suffixHebrew,
        updatedWord: arabicWord.slice(0, -suffixArabic.length),
      };
    }
  }
  return { suffix: "", updatedWord: arabicWord };
};

export default specialSuffixes;
