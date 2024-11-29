//strings are sequence of character used to represent text.
//Create string
let name = "sandesh roshan";
let str = "apana collage";

//Note - inbult properties are known as methods

// 1. string length
 console.log("name.length ->",name,name.length);
 console.log("str.length ->", str,str.length);

//2. string positions indices (index)
console.log("name[0] ->", name[0] )
console.log("name[0] ->", name[1] )
console.log("str[0] -> " , str[1])

//3. string interpolation - to create string by doing substitutions of placeholder using templete literal

let obj = {
    item : "Pen",
    price : 10
}

// normat string 
console.log("the price of", obj.item, "is", obj.price);

// templete litral (string interpolation)
console.log(`The price of ${obj.item} is ${obj.price}`);

//escape charaters
//1. \n : it used to print things in new lines in js.
console.log("Sandesh\nRoshan");

//2. \t : \t is used to give a space of tab in output
console.log("sandesh\troshan");


//string method in js: These are built in functions in js to manipulate a string

//1. .toUpperCase()
let  nam = "sandesh roshan";
console.log('name is',nam);
console.log('nam.toUpperCase()',nam.toUpperCase());

//2. .toLowerCase()
let uname = "ADARSH SINGH";
console.log(uname);
let lcname = uname.toLowerCase();
console.log("uname.toLowerCase()",lcname);

//3. .trim()
nam = "   sandesh roshan   ";
console.log("without trim()",nam);
console.log("nam.trim()",nam.trim());

//4. .slice(startindex, endindex) : .slice return part of string in between given indices(index)

let num = "001234567";
console.log(num);
console.log("num.slice(3,7) ", num.slice(3,7) );
console.log("num.slice(3) ", num.slice(3) );
console.log(uname);
console.log("uname.slice(3,7) ", uname.slice(1,7) );
console.log("uname.slice(3) ", uname.slice(1) );


//5.  .concat(string2) : concat is use to join the strings
let string1 = "apana";
let string2 = "collage";

console.log("string1",string1);
console.log("string2",string2);

console.log("string1.concat(string2)", string1.concat(string2));

//5. Another approach to string concate- (using +)
console.log("string1+string2 =",string1+string2);

//6. .replace(search value , new value)
let newstr = "hello";
console.log("newstr",newstr);
console.log("newstr.replace('h', 'k')) = ", newstr.replace("h","k"));

//7. .charAt(index) : It return character at index in string.
let newName = "ram";
console.log("newName = ", newName);
console.log("newName.charAt(2)=",newName.charAt(1));

//Let's Practice

//Que. Prompt user to enter their fullName. Generate a userName for them based on their input. Start userName with @ followed by their fullName and ending with the fullName length.

//code -sn

let fullName = prompt("Enter your fullname without any space : ");
let userName = "@"+fullName+fullName.length;
console.log(userName);
