class Student {
    studentId: number;
    fullName: string;
    email: string;
    age: number;

    constructor(studentId: number, fullName: string, email: string, age: number) {
        this.studentId = studentId;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
    }

    printDetails() {
        console.log(`Student Details:`);
        console.log(`ID => ${this.studentId}`);
        console.log(`Name => ${this.fullName}`);
        console.log(`Email => ${this.email}`);
        console.log(`Age => ${this.age}`);
    }
}

const student1 = new Student(101, "Mohammed Nuh", "mohammednuhabuhseina@gmail.com", 19);
student1.printDetails();
