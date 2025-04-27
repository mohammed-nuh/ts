class Employee {
    public name: string;
    private salary: number;
    protected department: string;
    readonly employeeId: number;

    constructor(name: string, salary: number, department: string, employeeId: number) {
        this.name = name;
        this.salary = salary;
        this.department = department;
        this.employeeId = employeeId;
    }
    
    public getDetails(){
        return `Employee => ${this.name}, Department => ${this.department}`;
    }

    private calculateBonus(){
        return this.salary * 0.1;
    }

    private increaseSalary(percent: number): void{
        this.salary += percent/100;
    }

    public giveRaise(percent: number): void{
        this.increaseSalary(percent);
    }
}

class Manager extends Employee {
    public teamSize: number;

    constructor(name: string, salary: number, department: string, employeeId: number, teamSize: number){
        super(name, salary, department, employeeId);
        this,teamSize = teamSize;
    }

    public getManagerInfo() {
        console.log(`Manager Name: ${this.name}`);
        console.log(`Department: ${this.department}`); // can access protected property inside subclass
        console.log(`Team Size: ${this.teamSize}`);
        // console.log(`Team Size: ${this.salary}`); // cant access private property
    }
}

let manager1: Manager = new Manager('Rohit', 25000, "IT", 101, 10);

// console.log(`Department: ${manager1.department}`); // cant access protected property outside class and subclass
// console.log(`Team Size: ${manager1.salary}`); // cant access (private property)
// manager1.employeeId = 102   // Cannot assign to 'employeeId' because it is a read-only property.

