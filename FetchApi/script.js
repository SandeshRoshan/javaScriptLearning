//📌Lecture 13 : Fetch Api
// the fetch api provides an interface for fetching (sending/receiving) resorces.
// 👉It use Requst and Response objects.
// THe fetch () methed is used fetch a resourse  (data)

//👉 let promise = fetch (url,[options])

const URL = "https://cat-fact.herokuapp.com/facts";
const factPara = document.querySelector("#fact");
const factBtn = document.querySelector("#btn");

// let promise = fetch(URL);
// console.log(promise);

//Better way  async- await

// const getFacts = async () => {
//     let response = await fetch(URL);
//     console.log(response.status);
//     console.log(response); // json response
// }

// console.log(getFacts());

//📌 JSON is javascript object notation
// json() method : returns a second promise that resolves with the result of parsing the response body text as json. (Input is JSON, output is JS object)

//👉 Json to js Object
// const getFacts = async () => {
//     console.log("fetching...");
//     factPara.innerText = "fetching...";
//     let response = await fetch(URL);
//     console.log(response); // json response
//     let data = await response.json();// js object
//     console.log(data);
//     console.log(data[0].text);
//     factPara.innerText = data[0].text;
// }

//👉Promise Chain method
function getFacts () {
    fetch(URL)
    .then((response) => {
        return response.json();
    })
    .then((data) =>{
        console.log(data);
        factPara.innerText = data[2].text;
    });
}

factBtn.addEventListener("click",getFacts);
