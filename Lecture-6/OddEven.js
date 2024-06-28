const num = () => {
    let num = document.getElementById('num').value;

    for (let i = 1; i <= num; i++) {
        if (i % 2 == 0) {
            document.getElementById('res').innerHTML = "It's an Even Number!"
        } else {
            document.getElementById('res').innerHTML = "It's an Odd Number!"
        }
    }
}