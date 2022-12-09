import { describe, it, expect } from "vitest";
import { getGiftsToRefill } from "../challenge07";

const warehouse2 = {
    a1: ["bici", "coche", "bici", "bici"],
    a2: ["coche", "bici", "muñeca", "coche"],
    a3: ["bici", "pc", "pc"],
    result: ["muñeca", "pc"],
};

const warehouse3 = {
    a1: [],
    a2: [],
    a3: [],
    result: [],
};

const warehouse4 = {
    a1: ["a", "a"],
    a2: ["a", "a"],
    a3: ["a", "a"],
    result: [],
};

const warehouse5 = {
    a1: ["a", "a"],
    a2: ["b", "b"],
    a3: ["c", "c"],
    result: ["a", "b", "c"],
};

const warehouse6 = {
    a1: ["a", "b"],
    a2: ["c", "d"],
    a3: ["e", "f"],
    result: ["a", "b", "c", "d", "e", "f"],
};

describe("Test challenge 07", () => {
    it("Should return a Array", () => {
        expect(
            getGiftsToRefill(warehouse2.a1, warehouse2.a2, warehouse2.a3)
        ).toBeInstanceOf(Array);
    });

    it("Should return the correct result when warehouse2 is given as a parameter", () => {
        expect(
            getGiftsToRefill(warehouse2.a1, warehouse2.a2, warehouse2.a3)
        ).toStrictEqual(warehouse2.result);
    });

    it("Should return the correct result when warehouse3 is given as a parameter", () => {
        expect(
            getGiftsToRefill(warehouse3.a1, warehouse3.a2, warehouse3.a3)
        ).toStrictEqual(warehouse3.result);
    });

    it("Should return the correct result when warehouse4 is given as a parameter", () => {
        expect(
            getGiftsToRefill(warehouse4.a1, warehouse4.a2, warehouse4.a3)
        ).toStrictEqual(warehouse4.result);
    });

    it("Should return the correct result when warehouse4 is given as a parameter", () => {
        expect(
            getGiftsToRefill(warehouse5.a1, warehouse5.a2, warehouse5.a3)
        ).toStrictEqual(warehouse5.result);
    });

    it("Should return the correct result when warehouse4 is given as a parameter", () => {
        expect(
            getGiftsToRefill(warehouse6.a1, warehouse6.a2, warehouse6.a3)
        ).toStrictEqual(warehouse6.result);
    });
});
