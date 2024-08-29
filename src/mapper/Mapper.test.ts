import { mapArabicToHebrewLetters } from "./Mapper";
import { describe, expect, test } from "@jest/globals";

interface MappingTest {
  id: number;
  description?: string;
  arabic: string;
  hebrew: string;
}

describe("mapArabicToHebrewLettersValidMaps", () => {
  test("empty string should remain empty", () => {
    expect(mapArabicToHebrewLetters("")).toBe("");
  });

  const expectedMappings: MappingTest[] = [
    { id: 0, arabic: "ء", hebrew: "א" },
    { id: 1, arabic: "ا", hebrew: "א" },
    { id: 2, arabic: "ب", hebrew: "בּ" },
    { id: 3, arabic: "ت", hebrew: "ת" },
    { id: 4, arabic: "ث", hebrew: "ת'" },
    { id: 5, arabic: "مرحبا", hebrew: "מרחבּא" },
    { id: 6, arabic: "مرحبا مرحبا", hebrew: "מרחבּא מרחבּא" },
    { id: 7, arabic: "مرحبه مرحبه", hebrew: "מרחבּו מרחבּו" },
    { id: 8, arabic: "مرحبة مرحبة", hebrew: "מרחבּה מרחבּה" },
    { id: 9, arabic: "اهلا", hebrew: "אהלאן" },
    { id: 10, arabic: "بيعملوا", hebrew: "בּיעמלו" },
    { id: 11, arabic: "انا بحيبك جدا", hebrew: "אנא בּחיבּךּ ג'ידאן" },
    { id: 12, arabic: "تعال هن فورا", hebrew: "תעאל הן פוראן" },
    {
      id: 13,
      description: "Special words should be mapped correctly.",
      arabic: "احيانا اروح عالبحر",
      hebrew: "אחיאנאן ארוח עאלבּחר",
    },
    {
      id: 14,
      description: "Special words should be mapped correctly.",
      arabic: "حمدالله",
      hebrew: "חמדאללה",
    },
    {
      id: 15,
      description: "Special words should be mapped correctly.",
      arabic: "الله اكبر",
      hebrew: "אללה אכּבּר",
    },
    {
      id: 16,
      description: "Special words should be mapped correctly.",
      arabic: "الله يرحمه",
      hebrew: "אללה ירחמו",
    },
    {
      id: 17,
      description: "Special words should be mapped correctly.",
      arabic: "الله يرحمك",
      hebrew: "אללה ירחמךּ",
    },
    {
      id: 18,
      description:
        "Words in Hebrew should end with end-form letter (ם, ן, ף, ץ)",
      arabic: "معلوم",
      hebrew: "מעלום",
    },
    {
      id: 19,
      description:
        "Words in Hebrew should end with end-form letter (ם, ן, ף, ץ)",
      arabic: "كان يا مكان في قديم الزمان",
      hebrew: "כּאן יא מכּאן פי קדים אלזמאן",
    },
    {
      id: 20,
      description: "Diacritics should be ignored",
      arabic: "كان ُ ي ُا مكان ف ًي قد ًيم الزم ًان",
      hebrew: "כּאן יא מכּאן פי קדים אלזמאן",
    },
    {
      id: 21,
      description:
        "Words in Hebrew should end with end-form letter (ם, ן, ף, ץ) even with pancuations",
      arabic: "كان؟ يا. مكان؛ في/ قديم الزمان",
      hebrew: "כּאן? יא. מכּאן؛ פי/ קדים אלזמאן",
    },
  ];

  expectedMappings.forEach((mapping) => {
    test(
      `mapping ${mapping.id} should map ${mapping.arabic} to ${mapping.hebrew}` +
        mapping.description ===
        null
        ? ""
        : ` (${mapping.description})`,
      () => {
        expect(mapArabicToHebrewLetters(mapping.arabic)).toBe(mapping.hebrew);
      }
    );
  });
});
