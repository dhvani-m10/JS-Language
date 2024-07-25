let users = [];


const handleDelete = (index) => {
    users.splice(index, 1);
    uiMaker();

};

const uiMaker = () => {
    document.getElementById("tbody").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = users[i].name;
        let td2 = document.createElement("td");
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement("td");
        td3.innerHTML = users[i].course;
        let td4 = document.createElement("td");
        td4.innerHTML = users[i].number;
        let td5 = document.createElement("td");
        td5.innerHTML = users[i].fee;
        let td6 = document.createElement("td");
        td6.innerHTML = "Remove";
        td6.addEventListener("click", () => handleDelete(i));

        tr.append(td1, td2, td3, td4, td5, td6);
        document.getElementById("tbody").append(tr);
    }
}

const Sales=()=>{
    document.getElementById("body").innerHTML = "";
    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement("tr");
        let td1 = document.createElement("td");
        td1.innerHTML = users[i].name;
        let td2 = document.createElement("td");
        td2.innerHTML = users[i].grid;
        let td3 = document.createElement("td");
        td3.innerHTML = users[i].course;

        tr.append(td1, td2, td3);
        document.getElementById("tbody").append(tr)
    }

}
const HandleData = (e) => {
    e.preventDefault();

    let user = {
        name: document.getElementById('name').value,
        grid: document.getElementById('grid').value,
        course: document.getElementById('course').value,
        number: document.getElementById('number').value,
        fee: document.getElementById('fee').value,

    }

    if (user.name.length < 2) {
        alert("Please enter a valid Name");
        return;
    }

    if (user.grid.length != 4) {
        alert("Please enter a valid GRID");
        return;

    }

    if (user.course.length <= 0) {
        alert("Please select a course");
        return;
    }

    if (user.number.length != 10) {
        alert("Please enter a valid Phone Number");
        return;
    }

    if (user.fee.length <= 0) {
        alert("Please enter a valid fee");
        return;
    }
    users.push(user);
    console.log(user);
    uiMaker();
}



document.getElementById('userData').addEventListener("submit", HandleData)
