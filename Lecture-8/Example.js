//push
let numbers = [10, 20, 30, 40];
numbers.push(4);
console.log("Push => ");
console.log(numbers);

//pop
numbers.pop();
console.log("Pop => ");
console.log(numbers);

//length
console.log("Length =>");
console.log(numbers.length);

//toString
console.log("ToString =>");
console.log(numbers.toString());

//splice
let number = [1, 2, 3, 4, 5];
number.splice(2, 2, 6, 7);
console.log("Splice =>");
console.log(number);

//slice
let n = [1, 2, 8, 7, 6];
let s = n.slice(1, 3);
console.log("Slice =>");
console.log(s);

//sort
let num1 = [3, 8, 4, 1];
num1.sort((a, b) => a - b);
console.log("Ascending =>");
console.log(num1);

num1.sort((a, b) => b - a);
console.log("Descending =>");
console.log(num1);

//shift()
number.shift();
console.log("Shift => ");
console.log(number);

//unshift()
number.unshift(1);
console.log("Unshift => ");
console.log(number)

//concat
let n1 = [10, 20, 30,40];
let n2 = [50, 60];
let concat = n1.concat(n2);
console.log("Concat : ");
console.log(concat);

//reverse
let num = [10, 20, 30];
num.reverse();
console.log("Reverse : ");
console.log(num); 