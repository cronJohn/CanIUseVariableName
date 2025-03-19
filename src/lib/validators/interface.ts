export interface ProgrammingLanguageValidator {
  reservedKeywords: string[]; // reserved keywords
  syntaxRegex: RegExp;        // what characters are allowed in the name
  isValid?: (input: string) => Promise<boolean>; // custom validation function
  testValidNames: string[];      // test list of valid names
  testInvalidNames: string[];    // test list of invalid names
  iconName?: string;             // icon name from skill-icons
}
