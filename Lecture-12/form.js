const HandleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        number: document.getElementById('number').value,
        email: document.getElementById('email').value,
        password: document.getElementById('password').value
    }

    if (user.username.length < 2) {
        alert("Please enter a valid Name");
        return;
    }
    if (user.number.length != 10) {
        alert("Please enter a valid Phone Number");
        return;
    }
    if (user.password.length < 6) {
        alert("Please enter a valid Password");
        return;
    }

    console.log(user);
}

document.getElementById('userData').addEventListener("submit", HandleData)