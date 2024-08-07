
let users = [];

const handleDelete = (index) => {
  users.splice(index, 1);
  Dragon();
  
};

const Dragon = () => {
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
      let tr = document.createElement("tr");
      let td1 = document.createElement("td");
      td1.innerHTML = users[i].name;
      let td2 = document.createElement("td");
      td2.innerHTML = users[i].color;
      let td3 = document.createElement("td");
      td3.innerHTML = users[i].category;
      let td4 = document.createElement("td");
      td4.innerHTML = users[i].quantity;
      let td5 = document.createElement("td");
      td5.innerHTML=users[i].price;
      let td6 = document.createElement("td");
      td6.innerHTML = "Delete";
      td6.style.color = "red";
      td6.addEventListener("click", () => handleDelete(i));
    
      tr.append(td1, td2, td3, td4, td5, td6);
      document.getElementById("tbody").append(tr);
    }
}
const handleData = (e) => {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let color = document.getElementById('color').value;
    let category = document.getElementById('category').value;
    let quantity = document.getElementById('quantity').value;
    let price=document.getElementById('price').value;

    let user = {
        name:name,
        color:color,
        category:category,
        quantity:quantity,
        price:price,
    };

    if (user.name.length < 2) {
        alert("Please enter a valid Name");
        return;
    }

    if(!user.color){
        alert("Please select any one colour");
        return;
    }
    if(!category){
        alert("Please select any one category");
        return;
    }

    if(!quantity){
        alert("Please select any one you want(quantity)");
        return;
    }

    if(!price){
        alert("Please select any one price");
        return;
    }

    users.push(user);
    console.log(users);
    Dragon();
}

document.getElementById("userdata").addEventListener("submit", handleData);
