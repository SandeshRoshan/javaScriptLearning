
const student = {
    fullName : "Sandesh Roshan",
    age : 23,
    isPass : true
}

// let student;

console.log(student?.age === null ? "true":"false");
console.log(student.age);
student.age =24;

console.log(student.age);
student.age = student.age +1;
console.log(student.age);

student.fullName = student.fullName +1;
console.log(student.fullName);

student.fullName = student.fullName -1;
console.log(student.fullName);
