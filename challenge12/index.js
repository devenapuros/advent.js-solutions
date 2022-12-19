export function selectSleigh(distance, sleighs) {
    let bestSleds = sleighs
        .map((item) => {
            return {
                name: item.name,
                performance: 20 - item.consumption * distance,
            };
        })
        .filter((item) => item.performance >= 0)
        .sort((a, b) => a.performance - b.performance);
    if (bestSleds[0]) return bestSleds[0].name;
    return null;
}
