const square = () => {

    let num = document.getElementById('num').value;

    let result = num * num;

    document.getElementById('res').innerHTML = `Square of ${num} is : ${result}`
}