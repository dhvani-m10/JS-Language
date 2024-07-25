
const handleData = (e) => {
    e.preventDefault();

    let user = {
        username: document.getElementById('username').value,
        email: document.getElementById('email').value,
        number: document.getElementById('number').value,
        password: document.getElementById('password').value
    }

    let regexPass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let regexNum=/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/

    // if (user.username.length < 2) {
    //     alert("username must be at least 2 characters")
    //     return

    // }

    if (!regexNum.test(user.number)) {
        alert("Incorrect Number")
        document.getElementById('number').style.border="4px solid red"
        return
    }else{
        document.getElementById('number').style.border="4px solid green"

    }

    if (!regexPass.test(user.password)) {
        alert("Incorrect password")
        return
    }

    console.log(user);

}


document.getElementById("userData").addEventListener("submit", handleData)