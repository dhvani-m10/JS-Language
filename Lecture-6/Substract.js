const substract = () => {

    let num1 = document.getElementById('num1').value;
    let num2 = document.getElementById('num2').value;
    let num3 = document.getElementById('num3').value;
    let num4 = document.getElementById('num4').value;

    let res = Number(num1) + Number(num2) + Number(num3) - num4;

    document.getElementById('res').innerHTML = `After Substraction : ${res}`
}