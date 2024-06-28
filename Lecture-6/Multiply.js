const multi = () => {

    let num = document.getElementById('num').value;

    let res = num * 50;

    document.getElementById('res').innerHTML = `${num} after Mutiply by 50 is : ${res}`;
}