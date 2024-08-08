import { mapArabicToHebrewLetters } from "./Mapper";
import { describe, expect, test } from "@jest/globals";

interface MappingTest {
  id: number;
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
    { id: 11, arabic: "انا بحيبك جدا", hebrew: "אנא בּחיבּכּ ג'ידאן" },
    { id: 12, arabic: "تعال هن فورا", hebrew: "תעאל הנ פוראן" },
    { id: 13, arabic: "احيانا اروح عالبحر", hebrew: "אחיאנאן ארוח עאלבּחר" },
    { id: 14, arabic: "حمدالله", hebrew: "חמדאללה" },
    { id: 15, arabic: "الله اكبر", hebrew: "אללה אכּבּר" },
  ];

  expectedMappings.forEach((mapping) => {
    test(`mapping ${mapping.id} should map ${mapping.arabic} to ${mapping.hebrew}`, () => {
      expect(mapArabicToHebrewLetters(mapping.arabic)).toBe(mapping.hebrew);
    });
  });
});
