import { describe, expect, it } from "vitest";
import { getFilesToBackup } from "../challenge13";

const tests = [
    {
        // Test 2
        lastBackup: 1546300800,
        changes: [
            [3, 1546301100],
            [2, 1546300800],
            [1, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
        ],
        result: [1, 3],
    },
    {
        // Test 3
        lastBackup: 1546300600,
        changes: [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100],
        ],
        result: [1, 2, 3],
    },
    {
        // Test 4
        lastBackup: 1556300600,
        changes: [
            [1, 1546300800],
            [2, 1546300800],
            [1, 1546300900],
            [1, 1546301000],
            [3, 1546301100],
        ],
        result: [],
    },
    {
        // Test 5
        lastBackup: 1556300600,
        changes: [],
        result: [],
    },
];

describe("Test challenge 13", () => {
    it("Should return an array", () => {
        expect(
            getFilesToBackup(tests[0].lastBackup, tests[0].changes)
        ).toBeInstanceOf(Array);
    });

    it("Should return the correct result when test is given as a parameter", () => {
        tests.forEach((test, index) =>
            expect(
                getFilesToBackup(test.lastBackup, test.changes),
                `Test #${index + 2}`
            ).toStrictEqual(test.result)
        );
    });
});
