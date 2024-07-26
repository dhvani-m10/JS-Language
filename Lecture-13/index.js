
const handleData = (e) => {
    e.preventDefault();

    let username = document.getElementById('username').value;
    let gender;
    if (document.getElementById('male').checked) {
        gender = document.getElementById('male').value;
    } else if (document.getElementById('female').checked) {
        gender = document.getElementById('female').value;
    } else if (document.getElementById('other').checked) {
        gender = document.getElementById('other').value;
    }
    let email = document.getElementById('email').value;
    let number = document.getElementById('number').value;
    let password = document.getElementById('password').value;
    let city=document.getElementById('city').value;
    let user = {
        username:username,
        email:email,
        number:number,
        password:password,
        gender:gender,
        city:city
    }

    let regexname = /^[\w'\-,.][^0-9_!¡?÷?¿/\\+=@#$%ˆ&*(){}|~<>;:[\]]{2,}$/;
    let regexPass=/^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/
    let regexNum=/^(?:(?:\+|0{0,2})91(\s*[\ -]\s*)?|[0]?)?[789]\d{9}|(\d[ -]?){10}\d$/

    if (!regexname.test(username)) {
        alert('Please enter a valid name.');
        return;
    }

    if (!gender) {
        alert('Please select a gender.');
        return;
    }

    if (!regexNum.test(user.number)) {
        alert("Incorrect Number")
        document.getElementById('number').style.border="4px solid red"
    }else{
        document.getElementById('number').style.border="4px solid green"

    }
  
    if (!regexPass.test(user.password)) {
        alert("Incorrect password")
        document.getElementById('password').style.border="4px solid red"
    }else{
        document.getElementById('password').style.border="4px solid green"
    }

    alert('Form submitted!!');

    console.log(user);

}


document.getElementById("userData").addEventListener("submit", handleData)