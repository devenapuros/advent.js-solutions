import { describe, it, expect } from "vitest";
import { selectSleigh } from "../challenge12";

const tests = [
    {
        // Test 2
        distance: 1,
        sleights: [
            { name: "pheralb", consumption: 0.3 },
            { name: "TMChein", consumption: 0.5 },
        ],
        result: "TMChein",
    },
    {
        // Test 3
        distance: 10,
        sleights: [
            { name: "Pedrosillano", consumption: 1 },
            { name: "SamarJaffal", consumption: 5 },
        ],
        result: "Pedrosillano",
    },
    {
        // Test 4
        distance: 10,
        sleights: [
            { name: "Pedrosillano", consumption: 1 },
            { name: "SamarJaffal", consumption: 2 },
            { name: "marcospage", consumption: 3 },
        ],
        result: "SamarJaffal",
    },
    {
        // Test 5
        distance: 50,
        sleights: [
            { name: "Pedrosillano", consumption: 1 },
            { name: "SamarJaffal", consumption: 2 },
            { name: "marcospage", consumption: 3 },
        ],
        result: null,
    },
];

describe("Test challenge 12", () => {
    it("Should return a string", () => {
        expect(selectSleigh(tests[0].distance, tests[0].sleights)).toBeTypeOf(
            "string"
        );
    });

    it("Should return the correct value when test is given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(
                selectSleigh(test.distance, test.sleights),
                `Test #${index + 2}`
            ).toBe(test.result)
        );
    });
});
