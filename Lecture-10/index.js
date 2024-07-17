
let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  uiMaker();
  
};

const handleDeleteAll=()=>{
    users=[];
    uiMaker();
}

const uiMaker = () => {
  document.getElementById("tbody").innerHTML = "";
  let tsalary=0;
  for (let i = 0; i < users.length; i++) {
    let tr = document.createElement("tr");
    let td1 = document.createElement("td");
    td1.innerHTML = users[i].username;
    let td2 = document.createElement("td");
    td2.innerHTML = users[i].email;
    let td3 = document.createElement("td");
    td3.innerHTML = users[i].number;
    let td4 = document.createElement("td");
    tsalary += parseFloat(users[i].salary)
    td4.innerHTML = users[i].salary;

    let td5 = document.createElement("td");
    td5.innerHTML = "Delete";

    let td6 = document.createElement("td");
    if (users[i].salary.length > 0) {
      if (users[i].salary >= 100000) {
        td6.innerHTML = "rich";
      } else {
        td6.innerHTML = "normal";
      }
    }

    td5.addEventListener("click", () => handleDelete(i));

   // addEventListener("click",handleDeleteAll);

    tr.append(td1, td2, td3, td4, td6, td5);
    document.getElementById("tbody").append(tr);
  }

   document.getElementById('totalEmp').innerText = `Total Emp :  ${users.length}`
    document.getElementById('totalSalary').innerText = `Total Salary :  ${tsalary}`
};

const handleData = (e) => {
  e.preventDefault();

  let username = document.getElementById("username").value;
  let email = document.getElementById("email").value;
  let number = document.getElementById("number").value;
  let salary = document.getElementById("salary").value;

  let user = {
    username: username,
    email: email,
    number: number,
    salary: salary,
  };

  users.push(user);
  console.log(users);
  uiMaker();

};

document.getElementById("userData").addEventListener("submit", handleData);
