type Student = {
    name: string;
    age: number;
}

type Degree = {
    courseName: string;
    year: number;
}

type CollegeStudent = Student & Degree;

let collegeStudent1: CollegeStudent = {
    name: "Nuh",
    age: 19,
    courseName: "BCA",
    year: 1
}

console.log(collegeStudent1);
