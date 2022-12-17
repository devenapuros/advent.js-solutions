export function countTime(leds) {
    let seconds = 0;
    while (!leds.every(Boolean)) {
        leds = leds.map((led, index) => (leds.at(index - 1) ? 1 : led));
        seconds += 7;
    }
    return seconds;
}
