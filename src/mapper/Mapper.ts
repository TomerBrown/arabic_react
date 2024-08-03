export function mapArabicToHebrewLetters(input: string): string {
    const mapping = getMapping();
    let result = "";
    for (let i = 0; i < input.length; i++) {
        const char = input.charAt(i);
        const mappedChar = mapping.get(char);
        if (mappedChar) {
            result += mappedChar;
        } else {
            result += char;
        }
    }
    return result;
}

// TODO: Add an options argument and allow for some customization.
function getMapping(): Map<string, string> {
    const mapping = {
        "ء": "א",
        "ا": "א",
        "ب": "בּ",
        "ت": "ת",
        "ث": "ת'",
        "ج": "ג'",
        "ح": "ח",
        "خ": "ח'",
        "د": "ד",
        "ذ": "ד'",
        "ر": "ר",
        "ز": "ז",
        "س": "ס",
        "ش": "ש",
        "ص": "צ",
        "ض": "צ'",
        "ط": "ט",
        "ظ": "ט'",
        "ع": "ע",
        "غ": "ע'",
        "ف": "פ",
        "ق": "ק",
        "ك": "כּ",
        "ل": "ל",
        "م": "מ",
        "ن": "נ",
        "ه": "ה",
        "و": "ו",
        "ي": "י",
        "ى": "א",
        "آ": "אַא",
        "ة": "ה",
        "إ": "א",
        "أ": "א",
        "ؤ": "ו",
        "ئ": "י",
        "؟": "?",
    };
    return new Map(Object.entries(mapping));
}


