export function checkPart(part) {
    
    const isPalindrome = (string) => {
        const finish = parseInt(string.length / 2);
        return Array.from({ length: finish }).every(
            (_, index) => string[index] === string[string.length - 1 - index]
        );
    };

    if (isPalindrome(part)) return true;

    const partArray = part.split("");
    return partArray.some((_, index) => {
        let sub_part = partArray.filter((_, i) => i !== index);
        return isPalindrome(sub_part.join(""));
    });
}
