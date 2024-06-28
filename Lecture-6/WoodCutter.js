const div = () => {

    let num = document.getElementById('num').value;

    if (num % 3 == 0) {
        document.getElementById('res').innerHTML = "YES"
    } else {
        document.getElementById('res').innerHTML = "NO"
    }
}