import {validatorLibrary} from "$lib/validators/langs";
import {getAllValidLanguages, isVariableValid} from "$lib/validators/utils";
import chalk from "chalk";

describe("Test if language validators work", () => {
  const testCases = Object.entries(validatorLibrary).flatMap(([key, value]) => [
    ...value.testValidNames.map((name) => [key, name, `is ${chalk.green("valid")}`, true] as const),
    ...value.testInvalidNames.map((name) => [key, name, `is ${chalk.red("invalid")}`, false] as const),
  ]);

  test.each(testCases)(
    `Language: %s | '${chalk.blue("%s")}' %s`,
    async (key, name, _, expected) => {
      await expect(isVariableValid(name, validatorLibrary[key])).resolves.toBe(expected);
    }
  );
});

describe("Test variable name for all languages", () => {
    const validInput: string = "foo";
    const invalidInput: string = "1foo";
    it(`${chalk.blue(validInput)} should return ${chalk.green(true)} for all languages`, async () => {
        const result = await getAllValidLanguages(validInput);
        expect(result).toEqual(Object.keys(validatorLibrary));
    })

    it(`${chalk.blue(invalidInput)} should return ${chalk.red(false)} for all languages`, async () => {
        const result = await getAllValidLanguages(invalidInput);
        expect(result).toEqual([]);
    })

    it("Emojis should be exclusive to Swift", async () => {
        const result = await getAllValidLanguages("💯");
        expect(result).toEqual(["Swift"]);
    })

    it("$ is allowed as first character for some langauges", async () => {
        const result = await getAllValidLanguages("$foo");
        expect(result).toEqual(["JavaScript", "Java", "Ruby"]);
    })
});
