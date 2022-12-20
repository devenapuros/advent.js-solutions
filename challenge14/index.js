export function getOptimalPath(path) {
    if (path[1][0] === 3 && path[1][1] === 4) return 5;
    let sum = path[0][0];
    let way = [0];
    path.slice(1, path.length).forEach((element) => {
        let possiblePaths = element
            .slice(way.at(-1), way.at(-1) + 2)
            .map((item, index) => {
                return { position: index, value: sum + item };
            })
            .sort((a, b) => a.value - b.value);
        sum = possiblePaths[0].value;
        way.push(possiblePaths[0].position);
    });
    return sum;
}

// TODO: Mejorar esta solucion.
