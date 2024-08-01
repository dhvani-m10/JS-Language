
class Manager {
    constructor(name, department) {
       // super(name);
       this.name=name; 
        this.salary = 0; 
        this.department = department; 
        // this.leaveStatus = 'none'; 
    }

    AEmployeeLeave() {
        this.leaveStatus = 'accepted';
        console.log("Employee leave has been accepted.");
    }

    REmployeeLeave() {
        this.leaveStatus = 'rejected';
        console.log("Employee leave has been rejected.");
    }

    getManagerSalary(amount) {
        this.salary += amount;
        console.log("MANAGER SALARY:", this.salary);
    }
}

class Employee extends Manager {
    constructor(name) {
        super(name); 
        this.salary = 0; 
    }

    requestLeave() {
        console.log(`${this.name} has requested to leave.`);
    }

    getSalary(amount) {
        this.salary += amount;
        console.log("EMPLOYEE SALARY:", this.salary);
    }
}

let m = new Manager('Manager', 'Marketion');
m.AEmployeeLeave();
m.getManagerSalary(150000); 

let e = new Employee('Employee');
e.getSalary(70000);
e.requestLeave();