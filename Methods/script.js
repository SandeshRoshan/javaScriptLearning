// Methods in javascript

//1. forEach() is a higher order function in js.

//forEach loop : forEach loop is a method  in javascript which is applied on arrays.

//syntax - arr.forEach(callbackFunction)

//callbackFunction : Here, it is a function to exucute for each element in the array. 

// A callback is a function passed as an argument as an argument to anoter funtion.

//example of callback - 
function abc (){
    console.log("hi this is abc function");
}

function myFunction (callback){
    return callback();
}

// abc();
myFunction(abc);

//forEach() loop example
let n = [1,2,3,4,5];
n.forEach(function pritnValue (val) {
    console.log(val);
});

//using arrow function

n.forEach( (val) => {
    console.log(val)
});

//practice

let names = ["Ram","Radha","Shyam"];
names.forEach(function name (val){
    console.log(val);
});

//Arrow function
names.forEach((val) => {
    console.log(val);
});

//forEach method have 3 optional parameter - 1. value, 2.index, 3.arrayitself.

let city = ["delhi","pune","goa"];
city.forEach((val,num) =>{
    console.log("names = ",val,"index = ",num)
});

city.forEach((items,index,list) => {
    console.log("item = ",items,"itemIndex = ",index,"list = ",list);
});

//Let's Practice
//Que.1  For a given array of numbers, print the square of each value the for each loop.

let num = [1,2,3,4,5];
num.forEach((val) => {
    console.log(`square of ${val} is `, val*val);
});

//shradha approch
let calsquare = (num) => {
    console.log(`square of ${num} is `, num*num);
}
num.forEach(calsquare);

// some more array methods

//2. Maps- maps method create a new array with the results of some operation. The value its callback retuns are used to form new array.

// maps are very similar to forEach loops.

let nums = [67,52,39];
nums.map((val) => {
    console.log(val);
});

let newArray = nums.map((val) => {
    return val;
});

console.log(newArray);

const narr = (nums) => {
    // console.log(nums);
    return nums;
}

let o = nums.map(narr);
console.log("o ", o);
console.log("oo ", nums.map(narr));

//3. filter: filter creates a new array of elements that give true for a condition/filter.

//eg: all even elements

let m = [1,2,3,4,5,6];

let evenNum = m.filter((val) => {
    return val % 2 === 0;
});
console.log(evenNum);

let oddNum = m.filter((val) =>{
    return val !==2 ;
});
console.log(oddNum);

//4.  reduce : reduce is used to performs some operations & reduces the array to single value. It returns that sigle value.

//Reduce takes 2 parameter previous and current to perform arithmatic and logical operation.

let num1 = [1,2,3,4];

const output = num.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output);


// code for largest element in array- 
let num2 = [5,6,7,9,1,200];
const out = num2.reduce((prev, curr) =>{
    return prev > curr ? prev : curr;
});

console.log(out);

//Let's practice
//Que.1 We are given array of marks of students. Filter out of the marks of student that scored 90+. marks = [12,89, 98, 67, 93,91]

//.filter() method -
let marks = [12,89,98,67,93,91];
let toppers = marks.filter((mark) =>{
   return mark > 90
});
console.log(toppers);

//Que.2 Take a number n as input from user - a. Create an array of number from 1 to n . b. Use the reduce method to calculate sum all numbers in array. C. use the reduce method to calculate product of array.

let input = prompt("Enter a number : ");

//a. 
let arr = [];
for (let i = 1; i <= input; i++){
    arr.push(i);
}
console.log("length of arr = ",arr.length, "array is ", arr);

//b. reduce method
const addition = arr.reduce((prev,curr) => {
    return prev + curr;
});
console.log("addition = ", addition);

//c. product of array
const product = arr.reduce((prev, curr) => {
    return prev * curr;
});
console.log("product = ", product);

