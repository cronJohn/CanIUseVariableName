import {validatorLibrary} from "../../lib/validators/langs";
import {isVariableValid} from "../../lib/validators/utils";
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

