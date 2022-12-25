import { describe, it, expect } from "vitest";
import { decorateTree } from "../challenge15";

const tests = [
    {
        // Test 2
        base: "B P R P",
        result: ["R", "P B", "R B B", "B P R P"],
    },
    {
        // Test 3
        base: "B B",
        result: ["B", "B B"],
    },
    {
        // Test 4
        base: "B B P R P R R",
        result: [
            "B",
            "R P",
            "B P P",
            "P R B R",
            "P P B B P",
            "B R B B B R",
            "B B P R P R R",
        ],
    },
    {
        // Test 5
        base: "R R P R R",
        result: ["R", "R R", "P B P", "R B B R", "R R P R R"],
    },
];

describe("Test challenge 15", () => {
    it("Should return an array", () => {
        expect(decorateTree(tests[0].base)).toBeInstanceOf(Array);
    });

    it("Should return the correct result when tests is given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(decorateTree(test.base), `Test #${index + 2}`).toStrictEqual(
                test.result
            )
        );
    });
});
