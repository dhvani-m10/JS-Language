const variable = () => {

    let num1 = document.getElementById('num1').value;
    document.getElementById('res').innerHTML = `${num1}`;

    num1 += "<br>" + document.getElementById('num2').value;
    document.getElementById('res').innerHTML = `${num1}`;

}