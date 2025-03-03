// Lecture 12 : Callbacks, Promises & Async Await

// Sync in js - synchronous means the code runs in a particular sequence of instruction given in the program. Each instruction waits for the previous instruction to complete its execution.

// console.log("one");
// console.log("two");
// console.log("three");

//Asynchronous - Due to synchronous programming , sometimes important instructions get blocked due to some previous instructions , which causes a delay in the UI. Asynchronous code execution allows to execute next instruction immeditely and doesn't block the flow.

// function hello(){
//     console.log("Hello");
// }

// setTimeout(hello,2000);

// //Arrow function

// setTimeout(() => {
//     console.log("Arrow Hello");
// }, 4000);

// console.log("One");

// setTimeout(() => {
//     console.log("Sequential Hello"); // this will execute 4 sec later
// }, 4000);

// console.log("Two");



// Callbacks //
//A callback is a function passed as an argument to another function.

// function sum (a,b){
//     console.log(a+b);
// }

// function calculator (x,y,sumCallback){
//     sumCallback(x,y);
// }

// calculator(1,2,sum); // This is callback sum function is inserted / included here.

// // calculator(1,2,sum()); // Worng way of callback () paranthesis show that we are executing sum here as function insted of callbacks


// CallBack Hell

//Callback Hell : Nested callbacks stacked below one another forming a pyramid structure.

// This is also known as Pyramid of doom.
// This style of programming becomes difficult to understand & manage.

// function getData(dataId, getNextData){
//     setTimeout(() => {
//         console.log("fetching",dataId," ...");
//         console.log("data", dataId);
//         if (getNextData){
//             getNextData();
//         }
//     },2000);
// }

// getData(1, () => {
//     getData(2);
// });

// getData(1,getData(2)()); // don't use it is trying to execute getData at the spot as function insted of callback;

// getData(1,getData(2)) // it will execute both at same time.

//For 4 dataset after 2 sec delay to each after each.

// getData(1,() => {
//     getData(2, () => {
//         getData(3,() => {
//             getData(4);
//         });
//     });
// });

// This is known as callback hell, It is difficult to understand.



// Promises //

// Promises : promises is for "eventual" completion of task. It is an object in Js. It is an solution to callback hell.

// Promise function have 2 handler (callbacks) resolve and reject and 3 states "pending" , "fullfiled" and rejected.

// Resolve means work is done; Reject means work / task got error while doing.

//code--
// let promise = new Promise((resolve, reject) => {
//     console.log("I am a Promise");
// });

//When we pass some value in resolve/reject it becomes fullfilled/rejected(error) and also states change from pending to fulfilled/rejected have same value in result object.

// code--
// let pr = new Promise((res,rej) => {
//     console.log("Hi this is new promise");
//     // res(123); // To fullfill promise
//     rej(123); // To rejected promise
// });
// console.log(pr);

// To getData from server
// code--

// function getData(dataId, getNextData){
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log("fetching",dataId," ...");
//             console.log("data", dataId);
//             if (getNextData){
//                 getNextData();
//             }
//         },2000);
//     });
// }

// // getData(1);
// console.log(getData(1));


// 📌How to use Promise .then() & .catch()

// .then() is used to get fullfiled response of promise.
// .catch() is used to get rejected response of promise.

// const getPromise = () => {
//     return new Promise((res,rej) => {
//         console.log("I am a promise");
//         res("success");
//         // rej("Network Error");
//     });
// };


// let promise = getPromise();

// promise.then(() => {
//     console.log("promise fullfilled");
// });

// promise.catch(() => {
//     console.log("rejected");
// });

// promise.then((message) => {
//     console.log("promise fullfilled", "message : ", message);
// });

// promise.catch((error) => {
//     console.log("rejected","error : ", error);
// });


//📌 Promise chaining
//👉 Promise Chain :- Promise chain is used to deal with nested callbacks in better way. PromiseChain looks more readeble and understandable as compared to callback hell.

// function asyncFun1(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data1");
//             resolve("success");
//         },4000);
//     });
// }
// function asyncFun2(){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             console.log("data2");
//             resolve("success");
//         },4000);
//     });
// }

// console.log("fetching data1...");

// let P1 = asyncFun1();
// P1.then((res) =>{
//     console.log("fetching data2...");
//     let P2 = asyncFun2();
//     P2.then((res) =>{

//     });
// });

//👌 Better way
// asyncFun1().then((res) =>{
//     console.log("fetching data2...");
//     asyncFun2().then((res) =>{

//     });
// });


//👉👉 async-await >> promise chain >> callback

//📌Async-Await //
//Async function always returns a promise. 
//Await pauses the execution of its surrounding async function until promise is settled.

// Async keyword use to make a function async.
// async function hello() {
//     console.log("hello");
// }

// console.log(hello()); // async also return promise without extra coding of promise.

//await -- 

// function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// }

// async function getWeatherData() {
//     await api();
// }

// For 2 times
// async function getWeatherData() {
//     await api();
//     await api();
// }

// getWeatherData();



//📌 IIFE : Immediately Invoked Function Expression //

// IIFE is a function that is called immediatly as soon as it is defined.

//👉 1. (function)() : The whole function is inside a paranthesis () and executed by an empty brackets(). Like a function/method.

// (function api(){
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// }
// )();

// //👉 2. (arrow frnction) () : The arrow function is inside a paranthesis () and executed by an empty brackets(). Like a function/method.


// (()=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// })();


// //👉 3. (asyncfunc) () : The async function is inside a paranthesis () and executed by an empty brackets(). Like a function/method.

// (async()=>{
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             console.log("Weather Data");
//             resolve(200);
//         },2000);
//     });
// })();


//📌solving dataserver problem by async await
function asyncFun(getData){
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            console.log("data",getData);
            resolve("success");
        },2000);
    });
}

//IIFE for only one time.
// (async()=>{
//     await asyncFun(1);
//     await asyncFun(2);
//     await asyncFun(3);
//     await asyncFun(4);
// })();

//This is for many time.
async function getData() {
    await asyncFun(1);
    await asyncFun(2);
    await asyncFun(3);
    await asyncFun(4);
    await asyncFun(5);
    await asyncFun(6);
}

getData();