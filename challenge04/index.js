export function fitsInOneBox(boxes) {
    let previousBox = { l: 0, w: 0, h: 0 };
    const sortedBoxes = boxes.sort((a, b) => a.l - b.l);
    console.log(sortedBoxes);
    return sortedBoxes.every((box) => {
        let test =
            previousBox.l < box.l &&
            previousBox.w < box.w &&
            previousBox.h < box.h;
        previousBox = box;
        return test;
    });
}
