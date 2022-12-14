import { describe, it, expect, isFirstRun } from "vitest";
import { checkPart } from "../challenge08";

const test_strings = {
    test2: "uwu", // true
    test3: "midu", // false
    test4: "lolol", // true
    test5: "yolooloy", // true
    test6: "zzzoonzzz", // true
};

describe("Test the challenge 8", () => {
    it("Should return a boolean value", () => {
        expect(checkPart(test_strings.test2)).toBeTypeOf("boolean");
    });

    it("Should return true when test2 is given as a parameter", () => {
        expect(checkPart(test_strings.test2)).toBe(true);
    });

    it("Should return false when test3 is given as a parameter", () => {
        expect(checkPart(test_strings.test3)).toBe(false);
    });

    it("Should return true when test4 is given as a parameter", () => {
        expect(checkPart(test_strings.test4)).toBe(true);
    });

    it("Should return true when test5 is given as a parameter", () => {
        expect(checkPart(test_strings.test5)).toBe(true);
    });

    it("Should return true when test6 is given as a parameter", () => {
        expect(checkPart(test_strings.test6)).toBe(true);
    });
});
