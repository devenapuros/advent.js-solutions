function wrapping(gifts) {
    return gifts.map(
        (gif) =>
            `${"*".repeat(gif.length + 2)}\n*${gif}*\n${"*".repeat(
                gif.length + 2
            )}`
    );
}
