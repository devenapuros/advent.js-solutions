import { describe, expect, it } from "vitest";
import { getOptimalPath } from "../challenge14";

const tests = [
    {
        // Test 2
        path: [[0], [7, 4], [2, 4, 6]],
        result: 8,
    },
    {
        // Test 3
        path: [[0], [2, 3]],
        result: 2,
    },
    {
        // Test 4
        path: [[0], [3, 4], [9, 8, 1]],
        result: 5,
    },
    {
        // Test 5
        path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]],
        result: 8,
    },
    {
        // Test 6
        path: [[1], [1, 5], [7, 5, 8], [9, 4, 1, 3], [-1, -1, -1, -1, -1]],
        result: 7,
    },
];

describe("Test challenge 14", () => {
    it("Should return a number", () => {
        expect(getOptimalPath(tests[0].path)).toBeTypeOf("number");
    });

    it("Should return the correct result when test is given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(getOptimalPath(test.path), `Test #${index + 2}`).toBe(
                test.result
            )
        );
    });
});
