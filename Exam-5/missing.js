let arr = [1, 2, 4, 5, 6];

let n = arr.length + 1;

let Sum = n * (n + 1) / 2;

let arraySum = 0;
for (let i = 0; i < arr.length; i++) {
    arraySum += arr[i];
}

let missingNumber = Sum - arraySum;

console.log(missingNumber);