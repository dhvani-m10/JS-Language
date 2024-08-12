let users = JSON.parse(localStorage.getItem('users')) || [];

let showTable = () => {
  document.getElementById("tbody").innerHTML = "";
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].sname;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].age;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].grid;
    let td4 = document.createElement("td");
    td4.innerHTML = users[i].number;

    tr.append(td1, td2, td3, td4);
    document.getElementById("tbody").append(tr);
  }
}

let addUser = (e) => {
  e.preventDefault();

  let user = {
    sname: document.getElementById('sname').value,
    age: document.getElementById('age').value,
    grid: document.getElementById('grid').value,
    number: document.getElementById('number').value,
  }
  if (sname.length < 2) {
    alert("Please enter a valid name");
    return;
  }
  if (!age) {
    alert("Please enter Age");
    return;
  }
  if (!number) {
    alert("Please enter a valid Number");
    return;
  }


  users.push(user);
  localStorage.setItem('users', JSON.stringify(users));
  showTable();
  document.getElementById("localstorage").reset();
}

document.getElementById("localstorage").addEventListener("submit", addUser);

window.onload = showTable;  

