
import Navbar from "../component/Navbar.js";

document.getElementById("navbar").innerHTML=Navbar();

function sorting(){
    document.getElementById("lth").addEventListener("click",()=>sorting("lth"));
    document.getElementById("htl").addEventListener("click",()=>sorting("htl"));
}



