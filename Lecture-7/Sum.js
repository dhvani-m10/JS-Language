let n = 8;

let eSum = 0
let oSum = 0

for (let i = 1; i <= n; i++) {
    if (i % 2 == 0) {
        eSum += i;
    }
    else {
        oSum += i;
    }
}

if (eSum > oSum) {
    console.log('even');
}
else {
    console.log('odd');
}