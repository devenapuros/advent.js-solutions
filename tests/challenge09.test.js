import { describe, it, expect } from "vitest";
import { countTime } from "../challenge09";

const tests = [
    {
        // test2
        leds: [0, 1, 1, 0, 1],
        result: 7,
    },
    {
        // test3
        leds: [0, 0, 0, 1],
        result: 21,
    },
    {
        // test4
        leds: [0, 0, 1, 0, 0],
        result: 28,
    },
    {
        // test5
        leds: [1, 0, 0, 1, 0, 0],
        result: 14,
    },
    {
        // test6
        leds: [1, 1, 0, 0, 0, 0],
        result: 28,
    },
    {
        // test7
        leds: [1, 1, 1],
        result: 0,
    },
];

describe("Test challenge 09", () => {
    it("Should return a value type number", () => {
        expect(countTime(tests[0].leds)).toBeTypeOf("number");
    });

    it("Should return correct result when tests are given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(countTime(test.leds), `Test #${index + 2}`).toBe(test.result)
        );
    });
});
