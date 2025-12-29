import { cleanInput } from "./repl";
import { describe, expect, test } from "vitest";
describe.each([
    {
        input: "        hello  world   ",
        expected: ["hello", "world"],
    },
    // TODO: MORE tEST CASES
    {
        input: "  hwhatosaur this was",
        expected: ["hwhatosaur", "this", "was"],
    }
])("cleanInput($input)", ({ input, expected }) => {
    test(`Expected: ${expected}`, () => {
        const actual = cleanInput(input);
        expect(actual).toHaveLength(expected.length);
        for (const i in expected) {
            expect(actual[i]).toBe(expected[i]);
        }
    });
});
