// When a webpage is loaded , the browser creates a document object model (DOM) of the page.

//dom manupulation - dom manupulation means accessing dom at any level of tree.

// console.dir is used to print objects, console.dir --> document --> print method.

//dom manupulation 
// 1.selecting with id - we select html element in javascript by its id.
//sytax - document.getElementById("myId");

let h = document.getElementById("myId");
console.log("1.selecting with id");
console.log(document.getElementById("myId"));
console.dir(h);

//2.selecting with class - we will get html collection
console.log("2.selecting with class");
console.log(document.getElementsByClassName("myClass"));
let classHeading = document.getElementsByClassName("myClass");
console.dir(classHeading);
console.log(classHeading);

//3.selecting with tag - we can also select html element by its tag type/name like parameter (<p>),heading <h> etc.we will get a html collection here.

//syntax - document.getElementsByTagName("h");
console.log("3.selecting with TagName ");
let heading = document.getElementsByTagName("h2");
console.log(heading);
console.dir(heading);

//4.querySelector - qureySelector can select anything id, class and tag. we just have to give name. querySelector always return first element of given id, class or tags.
//syntax - document.querySelector("myId/myClass/tag")

// querySelectorAll is used to select all id , class or tags. querySelectorAll returns node list of given element.
// syntax - document.querySelectorAll("myId/myClass/tag")

console.log("4.1.(a) querySelector for tag");
let tag = document.querySelector("h2");
console.log(tag);
console.dir(tag);

console.log("4.1.(b) querySelectorAll for tag");
let tags = document.querySelectorAll("h2");
console.log(tags);
console.dir(tags);

console.log("4.2.(a) querySelector for class ");
let queryClass = document.querySelector(".myClass");
console.log(queryClass);
console.dir(queryClass);

console.log("4.2.(b) querySelectorAll for class ");
let queryClassAll = document.querySelectorAll(".myClass");
console.log(queryClassAll);
console.dir(queryClassAll);

console.log("4.3.(a) querySelector for id ");
let queryId = document.querySelector("#myId");
console.log(queryId);
console.dir(queryId);

console.log("4.3.(b) querySelectorAll id ");
let queryIdAll = document.querySelectorAll("#myId");
console.log(queryIdAll);
console.dir(queryIdAll);

//Properties of DOM -
//1.tagName : It return tag for element node.

console.log("Properties of DOM ");
console.log("1.tagName : It return tag for element node.");
let head = document.querySelector("h2");
console.dir(head);
let tagName = head.tagName;
console.log(tagName);

//2.innerText : innerText return text content of the element and all its children.

console.log("2.innerText: innerText return text content of the element and all its children.");
let text = document.querySelector("h2");
console.dir(text);
let innerText = text.innerText;
console.log(innerText);
console.dir(innerText);

let textAll = document.querySelectorAll("body");
console.dir(textAll);
let innerTextAll = textAll.innerText;
console.log(innerTextAll);
console.dir(innerTextAll);


textAll = document.querySelector("body");
console.dir(textAll);
 innerTextAll = textAll.innerText;
console.log(innerTextAll);
console.dir(innerTextAll);

//we can also show text here
innerText = text.innerText = "asdf",
console.dir(innerText);
innerText = text.innerText = "No letcure";
console.log(innerText);

//3.innerHTML : innerHtml returns the html content of the element and its all children

console.log("3.innerHTML");
let div = document.querySelector("div");
console.log(div);
console.dir(div);
let innerHtml = div.innerHTML;
console.log(innerHtml);
console.dir(innerHtml);

//4.textContent - textContent returns textual content even for hidden elements.

let ele = document.querySelector("div");
console.dir(ele);
console.log(ele.innerText);
console.log("textContent",ele.textContent);

//Let's practice
//Que.1 Create a H2 Heading element with text "Hello JavaScript". Append "from apana collage student" to this text using js.

let hello = document.querySelector(".hello");
console.log(hello);
hello.innerText = hello.innerText + " form apana collage student";
console.log(hello);

//Que.2 Create 3 div with common class name "box". Access them & add some unique text to each of them.

let classBox = document.querySelectorAll(".box");
console.log(classBox);
// let i =1;
// for(let box of classBox){
//     box.innerText = "This is box "+i;
//     i++;
// }

classBox.forEach((box,i) => {
        box.innerText = "This is box "+i;
});


