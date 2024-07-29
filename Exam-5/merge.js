let arr = [1, 2, 3];
let arr1 = [4, 5, 6];

let arr2 = [];

for (let i = 0; i < arr.length; i++) {
    arr2[arr2.length] = arr[i];
}
for (let i = 0; i < arr1.length; i++) {
    arr2[arr2.length] = arr1[i];
}

console.log(arr2);