import {validatorLibrary} from "../../lib/validators/langs";

describe("Test if language validators work", () => {
  for (const [key, value] of Object.entries(validatorLibrary)) {
    describe(`Language: ${key}`, () => {
      test("Test valid names", async () => {
        if (value?.isValid) {
          for (const validName of value.testValidNames) {
            await expect(value.isValid(validName)).resolves.toBe(true);
          }
        } else expect(value).toBeUndefined();
      });

      test("Test invalid names", async () => {
        if (value?.isValid) {
          for (const invalidName of value.testInvalidNames) {
            await expect(value.isValid(invalidName)).resolves.toBe(false);
          }
        } else expect(value).toBeUndefined();
      });
    });
  }
});
