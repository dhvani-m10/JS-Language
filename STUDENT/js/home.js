

import Navbar from "../component/Navbar.js";

document.getElementById("navbar").innerHTML = Navbar();

let users = JSON.parse(localStorage.getItem("users")) || [];

const mapper = (data) => {
  document.getElementById("tbody").innerHTML = "";
  data.forEach((user) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${user.name}</td>
      <td>${user.email}</td>
      <td>${user.phone}</td>
      <td>${user.dateOfBirth}</td>
      <td>${user.course}</td>
      <td>${user.fee}</td>
    `;
    document.getElementById("tbody").appendChild(row);
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
