//Functions in js : Functions in js are block of code that performs a specific task , and it can be invoked/call whenever it needed.

//1. Create a function

function myFunc () {
 console.log("Hello world");
}

myFunc();

// Function save us from retundency / repeatation of code.

//functions with parameter
function myFun (msg) {
    console.log(msg);
}

myFun("I love js");

// function to add 2 numbers
function add (a,b) {
    console.log("the sum is ",a+b);
}

add(3,4);
add(5,9);
add(5.4, 5.9);

// return - return is a reserved keyword which is used to return value of a function. return only return 1 value it can be number , string or array.

// function using return

function sum (a, b ){
    s = a+b;
    return s;
}

let val = sum(3,4);
console.log(val);

//Arrow functions are the part of modern javascript. Arrow functions are comapact way of writing a function.

const arrowSum = (a,b) => {
    s = a+b;
    return s;
}
let asum = arrowSum(3,6);
console.log(asum);

//multiply function
//a. normal function

function multiply (a,b){
    s = a*b;
    return s;
}

let multiple = multiply(3,5);
console.log("multiple ", multiple);

//b. arrow function 

const arrowMultiply = (a,b) => {
    s = a* b;
    return s;
}

let multi = arrowMultiply (3,4);
console.log("arrowMulti ", multi);

// divide function 
//a. normal function

function divide (a,b) {
    console.log(a/b);
}

divide(4,2);

//b. arrow function

const arrowdivide = (a,b) => {
    console.log(a/b);

}

arrowdivide(3,2);

//exponent
//a.normal function
function expo (a,b){
    console.log("exponent ",a**b);
}
expo(5,2);

//b. arrow function
const arrowexpo = (a,b) =>{
    console.log("arrowexpo ", a**b);
}

arrowexpo(5,2);

// Modulas
//a. normal function
function modulas (a,b){
    console.log("modulas ", a%b);
}

modulas(4,3);

//b. arrow function
let arrowModu = (a,b) => console.log("modu ", a%b);
arrowModu(3,5);

//Let's Practice
//Que1. Create a function using the "function" keyword that takes a string as an argument & returns the number of vowel in the string.

// simple if approch
let count = 1;
function vowel (string){
    for (let char of string){
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            console.log(`vowel ${count} = `, char);
            count ++;
        }
    }
}

vowel("reading");
vowel("aeiou");

// my approch
let vows = "aeiou";
let num = 1;

function vowe (string){
    for (let char of string){
        for (let vow of vows){
            if (vow == char){
                console.log("vowels are ",char,num);
                num ++;
            }
        }
    }
}

vowe("redixxrwekxcvoutytaw");

//Que2. Create an arrow function to perform the same task.

let counting = 0;
const vowels = (string) => {
    for (let char of string){
        if (char == "a" || char == "e" || char == "i" || char == "o" || char == "u"){
            console.log(counting,"vowels ", char);
            counting ++;
        }
    }
}

vowels("Hello");
