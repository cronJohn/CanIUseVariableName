# About
- Check whether a string is a valid variable name in a variety of programming languages

# Contributing
- Want to add the latest and greatest, blazingly fast language? Create a PR with the following changes:
    - Install the node dependencies with `npm install` or `bun install`
    - Add the language to the `validatorLibrary` object in `src/lib/validators/langs.ts`. The language name will be the key, and its value will be an object with the following properties:
        - `reservedKeywords`: An array of keywords that are reserved in the language
        - `syntaxRegex`: A regular expression that matches the basic syntax of variable names
        - `testValidNames`: An array of valid variable names to test against
        - `testInvalidNames`: An array of invalid variable names to test against
        - `iconName`: The name of the icon to use for the language that are from [Iconify Skill Icons](https://icon-sets.iconify.design/skill-icons/). A default of the language's key will be used.
    - Run the test suite with `npm test` or `bun test` to ensure that the new language is properly validated.
    - Verify that the new language is display properly in the UI by running `npm run dev` or `bun run dev` and viewing the app in your browser.

> [!NOTE]
> Feel free to use the existing languages as a reference.
