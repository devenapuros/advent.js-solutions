import { describe, expect, it } from "vitest";
import { getMaxGifts } from "../challenge05";

const test_1 = {
    giftsCities: [12, 3, 11, 5, 7],
    maxGifts: 20,
    maxCities: 3,
}; // Should return 20

describe("Test challenge 05", () => {
    it("Should return a integer number", () => {
        expect(
            getMaxGifts(test_1.giftsCities, test_1.maxGifts, test_1.maxCities)
        ).toBeTypeOf("number");
    });

    it("Should return 20 when test_1 is given as a parameter", () => {
        expect(
            getMaxGifts(test_1.giftsCities, test_1.maxGifts, test_1.maxCities)
        ).toBe(20);
    });
});
