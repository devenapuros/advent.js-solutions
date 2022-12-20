function wrapping(gifts) {
    return gifts.map((gif) => {
        let topWrap = "*".repeat(gif.length + 2);
        return `${topWrap}\n*${gif}*\n${topWrap}`;
    });
}
