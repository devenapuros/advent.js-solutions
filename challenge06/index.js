export function createCube(size) {
    let cube = { up: "", down: "" };
    Array.from({ length: size }).forEach((_, index) => {
        cube.up +=
            " ".repeat(size - (index + 1)) +
            "/\\".repeat(index + 1) +
            "_\\".repeat(size) +
            "\n";
        cube.down +=
            " ".repeat(index) +
            "\\/".repeat(size - index) +
            "_/".repeat(size) +
            "\n";
    });
    return cube.up + cube.down.substring(0, cube.down.length - 1);
}
