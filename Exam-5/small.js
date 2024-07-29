let arr = [2, 3, 4, 5, 6, 9, 1]
let small = arr[0]
let len = arr.length;
for (let i = 0; i < len; i++) {
    if (arr[i] < small) {
        small = arr[i];
    }
}
console.log("THE smallIMUM NUMBER IS : ", small);