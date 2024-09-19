
import { getVal } from "../components/helper.js";
import Navbar from "../components/Navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

let users=JSON.parse(localStorage.getItem("users"))||[];

const handleData=(e)=>{
    e.preventDefault();

    let user={
        username : getVal(".username"),
        email : getVal(".email"),
        password : getVal(".password"),

    };
    // console.log(user);
    
    users.push(user);
    localStorage.setItem("users",JSON.stringify(users));

    alert("data stored successfully!"); 
    window.location.href="/index1.html"
}

document.querySelector('#userData').addEventListener("submit",handleData);
