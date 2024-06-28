const product = () => {
    let one = document.getElementById('one').value;
    let two = document.getElementById('two').value;
    let three = document.getElementById('three').value;
    let four = document.getElementById('four').value;
    let five = document.getElementById('five').value;

    let result = one * two * three * four * five;

    // console.log(result);

    document.getElementById('res').innerHTML = "After computing the product : " + result;

}