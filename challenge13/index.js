export function getFilesToBackup(lastBackup, changes) {
    let files = new Set();
    changes.forEach((element) => {
        if (element[1] > lastBackup) files.add(element[0]);
    });
    return Array.from(files).sort((a, b) => a - b);
}
