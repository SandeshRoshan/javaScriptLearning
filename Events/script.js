//Events in js 
//1. onbutton click - 
let btn1 = document.querySelector("#btn1"); //access

// console.log(btn1);
btn1.onclick = () => {
    console.log("btn was clicked");
}

//2. onmouseover - 

let div = document.querySelector(".box"); // access

// console.log(div);
div.onmouseover = () => {
    console.log("your mouse is in box");
}

//3. Event object - event object is a special object that has detailss about that event.
//All event handler have access to the event object properties and methods. Example-

div.onmouseover = (e) => {
    console.log(e);
    console.log(e.type);
}

//4. Event Listener : event listners are function that listen about event when it will going to occurs.

//1. addEventLister (event , callback) - 
let btn = document.querySelector("#btn1"); // access
btn.addEventListener("click", () =>{ //add
    console.log("click listerner is working");
});

btn.addEventListener("click",() => {
    console.log("handeler 2 is clicked");
});

btn.addEventListener("click", (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log("handler 3 is clicked");
});

//5. Remove EventListner : To remove event listner pass same event and the callback refernce should be same to remove.

//declare
const handeler = () =>{
    console.log("this is done by handler");
}

//add
btn.addEventListener("click",handeler);
//remove 
btn.removeEventListener("click",handeler);

//Let's Practice
//Que. Make a toggle btn to make dark mode and light mode.

let toggle = document.querySelector(".toggle");
//declare 
const change = () =>{
    if (toggle.innerText == "Dark Mode"){
        toggle.innerText = "Light Mode";
        // document.querySelector("body").style.backgroundColor= "black";
        document.querySelector("body").setAttribute("class","dark");
        console.log(document.querySelector("body"));
    }else{
        toggle.innerText = "Dark Mode";
        // document.querySelector("body").style.backgroundColor= "white";
        document.querySelector("body").setAttribute("class","light");
        console.log(document.querySelector("body"));

    }
}

//add 
toggle.addEventListener("click",change);
