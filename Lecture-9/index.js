let users=[]

const HandleData = (e) => {

    e.preventDefault();

    let name = document.getElementById('name').value;
    let age = document.getElementById('age').value;
    let number = document.getElementById('number').value;
    let email = document.getElementById('email').value;

    let user = {
        name: name,
        age: age,
        number: number,
        email: email,
    }

    users.push(user)
    console.log(user);
}

document.getElementById('userdata').addEventListener("submit", HandleData);