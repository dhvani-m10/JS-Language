let users = [];
let localStorage=()=>{
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
      let td5 = document.createElement("td");
      td5.innerHTML=users[i].price;
    //   let td6 = document.createElement("td");
    //   td6.innerHTML = "Delete";
    //   td6.style.color = "red";
    //   td6.addEventListener("click", () => handleDelete(i));
    
      tr.append(td1, td2, td3, td4, td5);
      document.getElementById("tbody").append(tr);
    }
}

let Data = (e) => {
    e.preventDefault();

    let user={
         sname:document.getElementById('sname').value,
        age:document.getElementById('age').value,
        grid:document.getElementById('grid').value,
        number:document.getElementById('number').value,
    }

    users.push(user);
    console.log(users);
    localStorage();
    

}

document.getElementById("locatstorage").addEventListener("submit", Data);
