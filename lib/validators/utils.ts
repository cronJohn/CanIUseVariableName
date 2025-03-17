import { ProgrammingLanguageValidator } from "./interface";

export async function isLanguageValid(input: string, v: ProgrammingLanguageValidator): Promise<boolean> {
  if (v.isValid) {
    return await v.isValid(input);
  } else { // simple logic for most languages
    return v.reservedKeywords
      ? (!v.reservedKeywords.includes(input) && v.syntaxRegex?.test(input)) ?? false
      : v.syntaxRegex?.test(input) ?? false;
  }
}
