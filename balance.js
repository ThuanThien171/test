function isBalanced(s) {
    // Write Your Code Here
    let a = s.split("");
    let b = a.length;
    let result = true;
    if (b % 2 == 1) {
        result = false
    } else {
        for (let i = 0; i < b / 2; i++) {
            switch (a[i]) {
                case "(":
                    if (a[b - i - 1] != ")") result = false
                    break;
                case "[":
                    if (a[b - i - 1] != "]") result = false
                    break;
                case "{":
                    if (a[b - i - 1] != "}") result = false
                    break;
                default:
                    result = false
                    break;
            }

        }
    }
    return result;
    ///////
}

function main() {
    const lines = 5;
    const arr = ["()", "{[()]}", "{[()}]", "()(", "]()["];
    for (var a0 = 0; a0 < lines; a0++) {
        var s = arr[a0];
        console.log(isBalanced(s));
    }
}

main();