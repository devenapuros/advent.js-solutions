/* eslint-disable indent */

const test_1 = {
    giftsCities: [12, 3, 11, 5, 7],
    maxGifts: 20,
    maxCities: 3,
}; // Should return 20

export function getMaxGifts(giftsCities, maxGifts, maxCities) {
    let sorted = giftsCities.sort((x, y) => y - x);
    let reduced = sorted.reduce((result, _, i) => {
        let a = i && giftsCities.unshift(giftsCities.pop());
        let b = giftsCities.slice(0, maxCities);
        b= b.reduce((acc, curr) => (acc += curr), 0);
        i = b;
        let c = i <= maxGifts && result.push(i);
        let d = i - giftsCities[maxCities - 1] <= maxGifts && result.push(i - giftsCities[maxCities - 1]);
        let rest = (a, b, c, d, result);
        return rest;
    }, []);
    return Math.max(...reduced, 0);
}
const res = getMaxGifts(test_1.giftsCities, test_1.maxGifts, test_1.maxCities);
console.log(res);
