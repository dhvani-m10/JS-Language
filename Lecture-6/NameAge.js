const print = () => {

    let Name = document.getElementById('name').value;
    let age = document.getElementById('age').value;

    document.getElementById('res').innerHTML = `Name is ${Name} and Age is ${age}`
}