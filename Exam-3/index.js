const uimaker = () => {

    document.getElementById('body').innerHTML = ''

    for (let i = 0; i < users.length; i++) {
        let tr = document.createElement('tr')
        let td = document.createElement('td')
        td.innerHTML=i+1;
        let td1 = document.createElement('td')
        td1.innerHTML = users[i].empname;
        let td2 = document.createElement('td')
        td2.innerHTML = users[i].email;
        let td3 = document.createElement('td')
        td3.innerHTML = users[i].dept;
        let td4 = document.createElement('td')
        td4.innerHTML = users[i].expYear;
        let td5 = document.createElement('td')
        if (users[i].expYear > 0 && users[i].expYear <= 5) {
            td5.innerHTML = "Junior";
        } else {
            td5.innerHTML = "Senior";
        }
        let td6 = document.createElement('td')
        td6.innerHTML = users[i].salary;
        tr.append(td,td1, td2, td3, td4, td5, td6)
        document.getElementById('body').append(tr)
    }

}

let users = []

const Employee = (e) => {
    e.preventDefault();

    let empname = document.getElementById('empname').value;
    let email = document.getElementById('email').value;
    let dept = document.getElementById('dept').value;
    let expYear = document.getElementById('expYear').value;
    let salary = document.getElementById('salary').value;

    let user = {
        empname: empname,
        email: email,
        dept: dept,
        expYear: expYear,
        salary: salary,
    }

    users.push(user);
    console.log(user);
    uimaker();
}

document.getElementById('Employee').addEventListener("submit", Employee);