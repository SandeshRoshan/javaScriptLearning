// const student = {
//     fullname:"sandesh roshan",
//     marks: 50,
//     printMarks: function(){
//         console.log("marks = ", this.marks);
//     }
// }


// let fruits =["apple", "banana"];

//Making our own prototypes

// const employee = {
//     calcTax () {
//         console.log("tax rate is 10%");
//     }
// };

// const karanArjun = {
//     salary: 50000
// };

// const karanArjun2 = {
//     salary: 50000,
//     calcTax (){     // object will win this case;
//         console.log("tax rate is 20%")
//     }
// };const karanArjun3 = {
//     salary: 50000
// };

// karanArjun.__proto__ = employee;
// karanArjun2.__proto__ = employee;
// karanArjun3.__proto__ = employee;


//* Classes in Js  *//
// Class is a program-code templete for creating objects.
// Those objects will have some (variables) & some behaviors (functions) inside it.

// class ToyotaCar {
//     start(){
//         console.log("Car is started");
//     }

//     stop(){
//         console.log("Car is stopped");
//     }

//     setBrand(brand){
//         this.brandName = brand; 
//     }
// }

// //To create object from class - we need to write / assign class to variable (object).

// let fortuner = new ToyotaCar();
// fortuner.setBrand("ford");
// let lexus = new ToyotaCar();
// lexus.setBrand("flyme");

// Constructor //
//constructor() is a special method and it is resereved key.
//constructor automatically invoked by new keyword.

// class ToyotaCar {
//     constructor (brand,milage){
//         console.log("creating new object");
//         this.brand = brand;
//         this.milage = milage;
//     }

//     start(){
//         console.log("starting the car.");
//     }

// }

// let fortuner = new ToyotaCar("fortuner",12);


// Inheritance in JS //
//inheritance is passing down properties & methods form parent class to child class.

// class Parent {
//     hello (){
//         console.log("hello this is parent class");
//     }
// }

// class Child extends Parent {

// }

// let obj = new Child();

// console.log(obj);
// console.log(obj.hello());

// class Person {
//     constructor(){
//         this.species = "human";
//     }
//     eat(){
//         console.log("start eating");
//     }

//     sleep(){
//         console.log("he can sleep.");
//     }
// }

// class Engineer extends Person {
//     work(){
//         console.log("solve problems");
//     }
// }
// class Doctor extends Person {
//     work(){
//         console.log("trear patients");
//     }
// }

// let sr = new Engineer();
// let adarsh = new Doctor();

// Super Keyword //
//The super keyword is used to call the constructor of its parent class to access the parent propreties and methods.

// class Person {
//         constructor(fullname){
//             // console.log("Enter parent constructor");
//             this.species = "human";
//             this.name = fullname;
//         }
//         eat(){
//             console.log("start eating");
//         }
    
//         sleep(){
//             console.log("he can sleep.");
//         }
// }

// class Engineer extends Person {
//     constructor(branch,fullname){
//         // console.log("Enter child constructor");
//         super(fullname); // to invoke parent class constructor
//         this.branch = branch;
//         // console.log("Exit child constructor");

//     }

//     work(){
//         super.eat(); // to invoke parent class method

//         console.log("solve problems");
//     }
// }

// let sr = new Engineer("cs","Sandesh roshan");
// console.log(sr);
// console.log(sr.work());
// console.log(sr.eat());




// Practice question- You are creating a website for your college. Create a class User with 2 properties, name & email. It is also has a method called viewData() that allows user to view website data.

// let DATA = "Secret Information";

// class User {
//     constructor (name, email){
//         this.name = name;
//         this.email = email;
//     }

//     viewData(){
//         console.log("Data = ", DATA);
//     }
// }

// let student1 = new User("shradha","shradha@mail.com");
// let student2 = new User("sr","sr@mail.com");

// console.log(student1);
// console.log(student1.viewData());
// console.log(student2);
// console.log(student2.viewData());


// //Question2 - Create a new class called Admin which inherits from User. Add a new method called editData to allows it to edit website data.

// class Admin extends User {
//     editData(){
//         DATA = "Data is edited";
//         console.log("new data = ", DATA);
//     }
// }

// let admin1 = new Admin("admin","admin@mail.com");

// console.log(admin1);
// console.log(admin1.editData());
// console.log(student2.viewData());


// Error handling //
// Try & cahtch method

let a = 5;
let b = 6;

console.log("a = ", a);
console.log("b = ", b);
console.log("a+b = ", a+b);
try {
    console.log("a+b = ", a+c); //error line

} catch (error) {
    console.log(error);
}
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
console.log("a+b = ", a+b);
