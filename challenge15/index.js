export function decorateTree(base) {
    const dic = ["B", "P", "R"];
    let tree = [base.split(" ")];
    Array.from({ length: tree[0].length - 1 }).forEach((_, i) => {
        tree.push(
            Array.from({ length: tree[i].length - 1 }).map((_, j) => {
                if (tree[i][j] !== tree[i][j + 1])
                    return dic.find(
                        (item) => item !== tree[i][j] && item !== tree[i][j + 1]
                    );
                return tree[i][j];
            })
        );
    });
    return tree.map((item) => item.join(" ")).reverse();
}
