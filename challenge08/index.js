export function checkPart(part) {
    let partArray = part.split("");
    partArray.unshift("");
    return partArray.some((_, index) => {
        let sub_part = partArray.filter((_, i) => i !== index);
        let sub_part_str = sub_part.join("");
        return Array.from({ length: parseInt(sub_part_str.length / 2) }).every(
            (_, index) =>
                sub_part_str[index] ===
                sub_part_str[sub_part_str.length - 1 - index]
        );
    });
}