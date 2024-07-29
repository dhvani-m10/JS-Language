let arr = [2, 2, 3, 4, 5, 2, 2, 2, 6, 9, 1]
let n = arr.length
let targetEle = 2
let count = 0;

for (let i = 0; i < n; i++) {
    if (targetEle == arr[i]) {
        count++;
    }
}
console.log("THE COUNT : ",count);