function getMinCost(m, d, k, c) {
    // Write Your Code Here
    let hp = d;
    let result = 0;
    if (m > 1 && k >= d) result = -1;
    else {
        for (let i = 0; i < m; i++) {
            if (hp <= k) {
                if (i != (m - 1)) {
                    result += c;
                    hp = d;
                }
            }
            hp -= k;
        }
    }
    return result;
}

function main() {
    const m = 10; // monster
    const d = 5; // device HP
    const k = 1; // - HP per attack
    const c = 1; // cost to repair
    console.log(getMinCost(m, d, k, c));
}

main()