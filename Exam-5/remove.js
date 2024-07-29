let array = [1, 2, 2, 3, 4, 4, 5]
let arr=[]
let n= array.length;

array.sort((a, b) => a - b);

if (n > 0) {
    arr[0] = array[0];
}

for (let i = 1; i < array.length; i++) {
    if (array[i] !== arr[arr.length - 1]) {
        arr[arr.length] = array[i];
    }
}

console.log(arr);