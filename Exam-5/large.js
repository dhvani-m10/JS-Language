let arr = [20, 35, 60, 90, 10, 30]
let large = arr[0]
let len = arr.length;
for (let i = 0; i < len; i++) {
    if (arr[i] > large) {
        large = arr[i];
    }
}
console.log("THE MAXIMUM NUMBER IS : ", large);