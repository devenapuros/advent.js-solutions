export function getGiftsToRefill(a1, a2, a3) {
    const superset = [...new Set(a1), ...new Set(a2), ...new Set(a3)];
    let available = new Set();
    let missing = new Set();
    superset.forEach((item) => {
        if (!available.has(item) && !missing.has(item)) missing.add(item);
        else {
            missing.delete(item);
            available.add(item);
        }
    });
    return [...missing];
}
