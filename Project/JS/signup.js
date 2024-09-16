import getValue from "../components/helper.js";

// let users = JSON.parse(localStorage.getItem("users")) || []
// const handleData=(e)=>{
//     e.preventDefault();

//     let user={
//         username:getValue('.username'),
//         email:getValue('.email'),
//         password:getValue('.password'),

//         username:getValue('.username'),
        
//     };
//     users.push(user);
//     localStorage.setItem("users", JSON.stringify(users));

//     window.location.href="./index1.html"
// }

document.querySelector('userData').addEventListener("submit",handleData);
