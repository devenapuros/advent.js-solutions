/* eslint-disable indent */

export function checkJump(heights) {
    let actions = [];
    let next;
    heights.slice(1, heights.length).forEach((element, index) => {
        if (element > heights[index]) next = "up";
        else if (element < heights[index]) next = "down";
        else next = actions.at(-1);
        if (next !== actions.at(-1)) actions.push(next);
    });
    return actions.length === 2 && actions[0] === "up" && actions[1] === "down";
}
