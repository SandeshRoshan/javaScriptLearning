//1.Attributes : Attributes gives us additional information of elements. They exist inside the elements.
//example - <div id = "box"> this is a div <div>

//1.getAttribute("class/id") : getAttribute("id") is used to get attribute of value on an element.
let div = document.querySelector("div");
console.log(div);
let attr = div.getAttribute("id");
console.log(attr);
console.dir(attr);

//2.setAttribute("name","value") : setAttribute("name","value") needs 2 parameter : attribute name and its value
div.setAttribute("class","box");
console.log(div.getAttribute("class"));

//3.style : style attribute in js is used to change / add style to a node or element.
console.log("3.style attribute ")
let div2 = document.querySelector("div");
div2.style.fontSize = "26px";
div.style.backgroundColor = "red";
div.style.color = "white";
div.style.display = "flex";
div.style.justifyContent = "center";

//4. Insert element : insert element in dom is a 2 step process first we create element then add it.

//To create - let ele = document.createElement("button").
//To insert - we we have 4 methods.

//1. .append - it add at the end of inside the node(inside).
let newbtn = document.createElement("button"); // create
newbtn.innerText = "buttonAppend";
newbtn.style.width = "100px";
let div3 = document.querySelector("div"); // access
div3.append(newbtn); //insert

//2. .prepend - .prepend adds at the start of inside the element/ node. (inside)
let prepbtn = document.createElement("button"); // create
prepbtn.innerText = "buttonPrepend"
let div4 = document.querySelector("div"); // access
div4.prepend(prepbtn); //insert

//3. .before - .before add element before the given element or node. (outside)
let beBtn = document.createElement("button"); //create
beBtn.innerText = "beforeButton";
let div5 = document.querySelector("div"); //access
div5.before(beBtn); //insert

//4. .after - .after add element after/below the given element or node.(outside)
let abtn = document.createElement("button"); //create
abtn.innerText = "afterButton";
let div6 = document.querySelector("div"); // access
div6.after(abtn); //insert 

//2. Remove Element - .remove is used to remove element by dom.
let div7 = document.querySelector("div");
div7.remove();

//Let's practice -
//Que1. Create a new button element. Give it a text "click me", background color of red & text color of white.
//Insert the button as the first element inside the body tag.

let btn = document.createElement("button"); //create
btn.innerText = "click me";
btn.style.backgroundColor = "red";
btn.style.color = "white";
let body = document.querySelector("body"); //access
body.prepend(btn);//insert
