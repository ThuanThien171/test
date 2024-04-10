function numberOfWaysToWin(x, y) {
    // Write Your Code Here
    let result = 0;
    if (x == 0 || y == 0) result = 1;
    else {
        result = combine(x + 1, x + y) / combine(1, y);
    }
    return result;
    ///////
}

////////
function combine(a, b) {
    var c = a, i = a;

    while (i++ < b) {
        c *= i;
    }
    return c;
}
////////

function main() {
    const lines = 3;
    const arr = [[3, 2], [3, 3], [3, 4]];
    for (let NItr = 0; NItr < lines; NItr++) {
        // Write your code here
        const [x, y] = arr[NItr];
        console.log(numberOfWaysToWin(x, y));
    }
}

main()