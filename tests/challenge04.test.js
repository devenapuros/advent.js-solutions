import { describe, it, expect } from "vitest";
import { fitsInOneBox } from "../challenge04";

const boxes_0 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
]; // Should return true

const boxes_1 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
];

const boxes_2 = [
    { l: 1, w: 1, h: 10 },
    { l: 3, w: 3, h: 12 },
    { l: 2, w: 2, h: 1 },
]; // Should return false

const boxes_3 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
]; // Should return true

const boxes_4 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 3, w: 1, h: 3 },
]; // Should return false

const boxes_5 = [
    { l: 1, w: 1, h: 1 },
    { l: 2, w: 2, h: 2 },
    { l: 2, w: 10, h: 2 },
]; // Should return false

const boxes_6 = [
    { l: 1, w: 1, h: 1 },
    { l: 3, w: 3, h: 3 },
    { l: 2, w: 2, h: 2 },
]; // Should return true

describe("Test the challenge 04", () => {
    it("Should return a boolean value", () => {
        expect(fitsInOneBox(boxes_0)).toBeTypeOf("boolean");
    });

    it("Should return true when boxes_0 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_0)).toBe(true);
    });

    it("Should return false when boxes_1 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_1)).toBe(true);
    });

    it("Should return false when boxes_2 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_2)).toBe(false);
    });

    it("Should return false when boxes_3 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_3)).toBe(true);
    });

    it("Should return false when boxes_4 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_4)).toBe(false);
    });

    it("Should return false when boxes_5 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_5)).toBe(false);
    });

    it("Should return false when boxes_6 is given as a parameter", () => {
        expect(fitsInOneBox(boxes_6)).toBe(true);
    });
});
