import { mapArabicToHebrewLetters } from "./Mapper";
import {describe, expect, test} from '@jest/globals';

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
    ]

    expectedMappings.forEach((mapping) => {
        test(`mapping ${mapping.id} should map ${mapping.arabic} to ${mapping.hebrew}`, () => {
            expect(mapArabicToHebrewLetters(mapping.arabic)).toBe(mapping.hebrew);
        });
    });

});