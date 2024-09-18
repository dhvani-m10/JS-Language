
import Navbar from "../component/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];


const mapper=(data)=>{
  document.getElementById("tbody").innerHTML=""
  students.map((list,index)=>
      {
      let name = document.createElement("h3");
      name.innerHTML = list.name;
      let email = document.createElement("p");
      email.innerHTML = list.email;
      let phone = document.createElement("p");
      phone.innerHTML = list.phone;
      let dateOfBirth = document.createElement("p");
      dateOfBirth.innerHTML = list.dateOfBirth;
      let course = document.createElement("p");
      course.innerHTML = list.course;
      let fee = document.createElement("p");
      fee.innerHTML = list.fee;
      let div=document.createElement("div")
      div.append(name, email, phone, dateOfBirth, course, fee);
      document.getElementById("tbody").append(div);

  });
};
mapper(users);

const handleSort = (orderBy) => {
  if (orderBy == "lth") {
    let temp = users.sort((a, b) => a.fee - b.fee);
    mapper(temp);
  } else {
    let temp = users.sort((a, b) => b.fee - a.fee);
    mapper(temp);
  }
};

document.getElementById("lth").addEventListener("click", () => handleSort("lth"));
document.getElementById("htl").addEventListener("click", () => handleSort("htl"));
