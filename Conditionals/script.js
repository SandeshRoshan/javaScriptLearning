//Conditional statements are used to check conditions and execute the code according to the condition or sitution.

//1. if statement 
let age = 25;

if(age >= 18){
    console.log("you can vote");
}

age = 160;

if(age < 18 ){
    console.log("you can't vote");
}

//2. if else statement 
if (age < 18 ){
    console.log("you not an adult");
}else {
    console.log("You are an adult");
}

//3. else if statement
if(age < 18 ){
    console.log("You are a kid");
}else if (age < 50){
    console.log("You are young");
}else if (age > 50){
    console.log("You are old")
}


//Ternary operator :- ternary operator have 3 operand 
// a ?b:c  or operator ? true : false;

let result = age > 18 ? "adult" : "kid";
console.log(result);

let color = "red";
let state = "acti";

result = color === "red"? state === "active" ? "true" : state === "activ"? "look" : "failed" : "hi";
console.log(result);



//Que. Write a code which can give grade to students according to their scores:

/*
90 - 100 A ;
80 - 89 B;
70 - 79 C;
60 - 69 D;
50 - 59 E;
0 - 49 F;

*/

//approach 1- else if statement 

let score = 66;

if (score >= 90 ){
    console.log("Grade is A");
}else if(score >= 80){
    console.log("Grade is B");
}else if(score >= 70){
    console.log("Grade is C");
}else if (score >= 60){
    console.log("Grade is D");
}else if(score >= 50){
    console.log("Grade is E");
}else if (score <=49){
    console.log("Grade is F");
}


//approach 2 elseif shradha approch

let grade ;

if(score >= 90 && score <= 100){
    grade = "A";
}else if (score >= 80 && score <= 89){
    grade = "B";
}else if (score >= 70 && score <= 79){
    grade = "C";
}else if(score >= 60 && score <= 69){
    grade = "D";
}else if(score >= 50 && score <= 59){
    grade = "E";
}else if(score >= 0 && score <= 49){
    grade = "F";
}

console.log("According to your score, your grade was: ", grade)