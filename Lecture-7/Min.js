let arr = [20, 35, 40, 50, 60, 90, 10, 30]
let max = arr[0]
let len = arr.length;
for (let i = 0; i < len; i++) {
    if (arr[i] < max) {
        max = arr[i];
    }
}
console.log("THE MAXIMUM NUMBER IS : ",max);