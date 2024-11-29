//Arrays are the objects where key are index. Arrays in js are the collection of items in a linear way by position/index.

//1.create array
let num = [1,2,3,4,5];
let heros = ["Ironman","Hulk","Thor"];
console.log(num);
console.log(heros);
console.log(typeof heros);


//2. Array Indices : Indinces are used to get value from array by its position

console.log("heros[0] = ",heros[0]);
console.log("heros[1] = ", heros[1]);
console.log("num[1] =", num[1]);

// if we access those index/positions which are greater than avalible index then it will return undefined.

console.log("heros[10] = ", heros[10]);

//strings are immutable in js - we can't change/assign value of particular index.
//arrays are mutable in js - we can change the value at any particular index.

//change value of array at index
heros[0] = "Superman";
console.log(heros);

//Loops over arrays:- Loops are applied on array to print all values of arrays.
//Loops use length proprty of array as stopping condition of array. 

//1. for loop
for (let i = 0; i < heros.length; i++){
    console.log(heros[i]);
}

//2. while loop
let i = 0;
while(i < heros.length){
    console.log("while loop heros",heros[i]);
    i++;
}

//3. do while loop
let y = 0;
do{
    console.log("doWhile loop heros ", heros[y]);
    y++;
}while (y<heros.length);

//4. for of loop

for (let element of heros){
    console.log(element);
}

//for of loop - practice

for (let hero of heros){
    console.log("hero of heros ", hero);
}

let cities = ["Delhi", "Mumbai", "Pune"];
for(city of cities){
    console.log(city);
}

//.toUpperCase() on for of loop
for(city of cities){
    console.log("cities in UpperCase ",city.toUpperCase());
}

// Que.1 For a given array with marks of student -> [85, 97, 44, 37,76,60]. Find the average marks of the entire class.

let marks = [85, 97, 44, 37,76,60];
let sum = 0;
for (let mark of marks){
    sum += mark;
}

console.log("average is ",sum/marks.length);

//Que2. For a given array with prices of 5 items -> [250, 645, 300, 900,50]. All items have an offer of 10% off on them. Change the array to store final price after applying offer.

let prices = [250, 645, 300, 900, 50];
let offerPrice = [];
let o = 0;

for(let price of prices){
    offerPrice.push(price - price/10);
    prices[o] =(price - price/10);
    o++;
}
console.log(offerPrice);
console.log(prices);

//Array methods
//1.push():- push() is used to add element at end of array it returns new length of array.

let foodItems = ["chips", "mango", "banana"];
console.log("foodItems ", foodItems);
foodItems.push("litchi");
console.log(foodItems);
foodItems.push("Panner","cake");
console.log("foodItems ",foodItems);

//Pop - pop is used to delete item in original array from end and return the deleted items.

foodItems.pop();
console.log(foodItems);

deletedItem = foodItems.pop();
console.log("foodItem ",foodItems);
console.log("deletedFood = ",deletedItem);

//3. toString() - toString does not change in original array but it provide a new string of array.
console.log("foodItems.toString() = ",foodItems.toString());

//4. .concat() - concat() joins multiple arrays & returns results. concat() also doen't change in original array. It return a new array.

let marvelHeros = ["spiderman","ironman","thor"];
let dcHeros = ["batman","superman"];
let indianHeros = ["krish","shaktiman"];

let allHeros = marvelHeros.concat(dcHeros,indianHeros);
console.log(allHeros);
let newHeros = marvelHeros+dcHeros;
console.log("newHeros = ",newHeros);

//5. unshift(): Unshift is like push method but it add items in starting/begning.

marvelHeros.unshift("antman");
console.log(marvelHeros);

//6. shift(): shift() is like pop but it remove items from starting/begning in array.It also raturn value of deleted item.

marvelHeros.shift();
console.log(marvelHeros);
let deletedHero = marvelHeros.shift();
console.log("deletedHero",deletedHero);
console.log(marvelHeros);

//6. slice(startindex, endindex) :- slice method return a peice of the array. slice(sindex, eindex) does not change in original array.

let veg = ["tomato","potato","beans","carrot"];
console.log(veg);
console.log("veg.slice(1,2) ",veg.slice(1,2));
console.log("veg.slice(1,3) ",veg.slice(1,3));
console.log("veg.slice(1) ",veg.slice(1));
console.log("veg.slice(1) ",veg.slice());

//slice() is also used to make copy of array
let copyArr = veg.slice();
console.log("copyArr",copyArr);

//7. splice(startindex, deletecount, newElemen1..,newElemen2..) :- It work like slice but it changes in original array, it need 3 parameters startindex, deletecount, newelement. so that it can perform add , replace and delete operations.

console.log("num = ", num);
num.splice(2,2,101,102);
console.log("num.splice(2,2,101,102) = ",num);

//Add element on position 2 by using splice(si,cd,ne)
num.splice(2,0,50);
console.log(num);

//Delete 101 by index
num.splice(3,1);
console.log("delete 101 ",num);

//Replace item 5 with 101
num.splice(4,1,101);
console.log(num);

//Delete all item after a position/index
num.splice(2);
console.log(num);


//Que1. Create an array to store companies -> ["Bloomberg", "Microsoft","Uber","Google","IBM","Netflix"]

//a. Remove first  comapany from the array
//b. Remove uber & add ola on its place
//c. Add Amazon at the end.

let companies = ["Bloomberg", "Microsoft", "Uber", "Google","IBM","Netflix"];

/* a */ companies.shift();
console.log(companies);

/* b */ companies.splice(1,1,"Ola");
console.log(companies);

/* c */ companies.push("Amazon");
console.log(companies);