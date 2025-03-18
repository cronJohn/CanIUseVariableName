import type { ProgrammingLanguageValidator } from "./interface";
import { validatorLibrary } from "./langs";

export async function isVariableValid(input: string, v: ProgrammingLanguageValidator): Promise<boolean> {
  if (v.isValid) {
    return await v.isValid(input);
  } else { // simple logic for most languages
    return v.reservedKeywords
      ? (!v.reservedKeywords.includes(input) && v.syntaxRegex?.test(input)) ?? false
      : v.syntaxRegex?.test(input) ?? false;
  }
}

export async function getAllValidLanguages(input: string): Promise<string[]> {
    const languages: string[] = [];
    for (const [lang, validator] of Object.entries(validatorLibrary)) {
        if (await isVariableValid(input, validator)) {
            languages.push(lang);
        }
    }

    return languages;
}
