//Loops in js:- Loops are used to execute a piece of code again and again

//1.for loop 
for(let i = 1; i <= 5 ; i++){
    console.log("hello js");
}

// que. Code to calculate sum of first n numbers - 
let n = 10;
let sum = 0;

for(let i = 1; i <= n; i++){
    sum += i;
}

console.log("sum of n numbers is ", sum);

//2.Infinite loops : It runs infinite times. so we should avoid it. its stopping condition is always true.

//3. While loop

let i = 1;
while(i <= 5){
    console.log("this is while loop",i);
    i++;
}

let k = 0;
while(k < 3){
    console.log("k is on ", k);
    k++;
}

//4. do while loop : this loop run once before checking its stopping conditions. its stopping conditions is outside of loop.

let u = 1;
do {
    console.log("i am do while loop");
    u++;
}while(u < 3);

let y = 1;
do{
    console.log("this is new do while loop");
    y++;
}while(y<2);


//Special loops : there are 2 types of special loops.
//1.for of loop : For of loop is used on string and arrays to find characters and values. 

let str = "apana collage";
for(let i of str){
    console.log(i);
}

//que. calculate the size of string using for of loop.
//for of loop 

let string = "javascript";
let size = 0;

for(let s of string){
    size++;
}

console.log(size);

//2. for in loop : for in loop is generaly used for objects and arrays.
//for in loop

let student = {
    fullName :"Sandesh Roshan",
    age : 23,
    isPass : true
}

for(let i in student){
    console.log(i);
}

for (let key in student){
    console.log("Key = ",key, "Value =", student[key]);// this is correct approach we should always use bracket notation.

    // console.log("Key = ",key, "Value =", student.key);// this is wrong approch.
}

//Que.1 Print all even numbers from 0 to 100.
//for loop
for(let i = 0; i <=100;i++){
    if(i % 2 === 0){
        console.log(i , "is even number");
    }
}

//while loop
let e = 1;
while(e <= 100){
    e % 2 === 0? console.log ("is while even"):console.log ('');
    e++;
}

//do while loop
let w = 0;
do{
    if (w % 2 === 0){
        console.log(w,"is dowhile even");
    }
    w++;
}while(w<=100);


//Que.2 Create a game where you start with any random game number. Ask user to keep gessuing the game number until the user enter correct number.

//approach 1 - using else if statement

// let num = 25;
// let input = prompt("Guess the game number: ");

// if(input == num){
//     alert("you entered correct number");
// }else{
//     let input = prompt("Wrong! Guess again");
// }

// approach was wrong works only once.

//approch 2 - while loop
let num = 25;
let input = prompt("Guess the game number: ");
while(num != input){
    input = prompt("Wrong! Guess again: ");
}

alert("Great! You gussed correct number : ",input);
