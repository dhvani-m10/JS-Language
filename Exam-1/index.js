const addition = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let add = 0;
   if(!isNaN(num1)){
    if(num1&&num2){
        add = Number(num1) + Number(num2);
        document.getElementById('result').innerHTML = `The result of addition is ${add}`;
    }else{
        document.getElementById('result').innerHTML = `Please enter valid numbers`;
    }
   }else{
    document.getElementById('result').innerHTML = `Please enter valid numbers`;
   }
}

const subtraction = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let sub = num1-num2;

    document.getElementById('result').innerHTML = `The result of subtraction is ${sub}`;
}

const multiply = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let mul =num1*num2;

    document.getElementById('result').innerHTML = `The result of multiplication is ${mul}`;
}


const divide = () => {
    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;

    let div = num1/num2;

    if(num2==0){
        document.getElementById('result').innerHTML=`Cannot divide by zero`;
    }else{
        document.getElementById('result').innerHTML = `The result of division is ${div}`;
    }
}

