var Student = /** @class */ (function () {
    function Student(studentId, fullName, email, age) {
        this.studentId = studentId;
        this.fullName = fullName;
        this.email = email;
        this.age = age;
    }
    Student.prototype.printDetails = function () {
        console.log("Student Details:");
        console.log("ID => ".concat(this.studentId));
        console.log("Name => ".concat(this.fullName));
        console.log("Email => ".concat(this.email));
        console.log("Age => ".concat(this.age));
    };
    return Student;
}());
var student1 = new Student(101, "Mohammed Nuh", "mohammednuhabuhseina@gmail.com", 19);
student1.printDetails();
