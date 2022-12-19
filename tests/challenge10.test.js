import { describe, it, expect } from "vitest";
import { checkJump } from "../challenge10";

const tests = [
    {
        // test 2
        path: [1, 2, 1],
        result: true,
    },
    {
        // test 3
        path: [1, 3, 8, 5, 2],
        result: true,
    },
    {
        // test 4
        path: [1, 7, 3, 5],
        result: false,
    },
    {
        // test 5
        path: [1, 2, 3, 2, 1],
        result: true,
    },
    {
        // test 6
        path: [1, 2, 2, 2, 1],
        result: true,
    },
    {
        // test 7
        path: [0, 1, 0],
        result: true,
    },
    {
        // test 8
        path: [2, 2, 2, 2],
        result: false,
    },
    {
        // test 9
        path: [1, 2, 3],
        result: false,
    },
    {
        // test 10
        path: [1, 2, 3, 2, 1, 2, 3],
        result: false,
    },
    {
        // test 11
        path: [1, 1000, 900, 800],
        result: true,
    },
    {
        // test 12
        path: [1, 1000, 100, 800],
        result: false,
    },
    {
        // test 13
        path: [1, 1, 1, 1, 1, 1, 1, 1, 2, 1],
        result: true,
    },
    {
        // test 14
        path: [1, 2, 3, 1, 3, 1],
        result: false,
    },
    {
        // test 15
        path: [1, 3, 2, 5, 4, 3, 2, 1],
        result: false,
    },
];

describe("Test challenge 10", () => {
    it("Should return a boolean value", () => {
        expect(checkJump(tests[0].path)).toBeTypeOf("boolean");
    });

    it("Should return the correct result when test is given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(checkJump(test.path), `Test #${index + 2}`).toBe(test.result)
        );
    });
});
