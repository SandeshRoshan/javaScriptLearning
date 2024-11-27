// Arithmatic operators (+ - * /)

let a = 5;
let b = 2;

console.log("a =", a , "& b =" , b);

console.log("a + b = ", a + b);
console.log("a - b = ", a - b);
console.log("a * b = ", a * b);
console.log("a / b = ", a / b);

// Special operators (% **)

console.log("a % b = ", a % b); // used to find remainder
console.log("a ** b = ", a ** b); // it is used to find exponent

// unary operators :- it have 2 types increment and decrement
// increment :- it have 2 types preincrement(++a) and postincrement(a++)

console.log("a = ", a, "++a =", ++a); //preincrement
console.log("a = ", a, "& a++ =", a++ ); //postincrement - show increment in next line

console.log("nextline a =", a);

// decrement operator :- i have also 2 types predecrement(--a) and postdecrement(a--)

console.log("a = ", a, "& --a ", --a ); // predecrement
console.log("a = ", a, "& a--", a--); // postdecrement
console.log("postdecrement nextline a =", a);

//Assingment operators :- assingment operator is used to assign values
//(= += -= *= %= **=  etc...)

let c = 2;

console.log("c = ", c);

//2. += is used to add and assing the value
// like c += 4; means c = c+4;
console.log("c = ",c ,"& c += 4 is ", c += 4);

//3. -= is used to decrease and assign the value
// like c -= 5 ; means c = c - 5;
console.log("c = ", c , "& c -= 5 is ", c -= 5);

//4. *= is multiply and then assign the value
// like c *= 2; means c = c * 2;
console.log("c = ", c , "& c *= 2 is " , c *= 2);

//Comparision operator : it is used to comapare value and their types

//1. equal to (==)
console.log("a = ",a,"b =",b ,"& a == b ", a==b);
//2. equalto & type (===)
console.log("a = ",a,"b =",b ,"& a === b", a ===b );
//3. not equalto (!=)
console.log("a = ",a,"b =",b ,"& a != b", a !=b );
//4. not equalto & type (!==)
console.log("a = ",a,"b =",b ,"& a !== b", a !==b );
//5. is greaterthan (>)
console.log("a = ",a,"b =",b ,"& a > b", a > b );
//6. isgreaterthan & equalto (>=)
console.log("a = ",a,"b =",b ,"& a >= b", a >=b );
//7. islessthan (<)
console.log("a = ",a,"b =",b ,"& a < b", a < b );
//8. is lessthan & equalto (<=)
console.log("a = ",a,"b =",b ,"& a <= b", a <= b );

// Logical operator : it is used to comapare multiple conditions,statements and it also return boolean

console.log("a = ", a, "b = ", b, "c = ", c);
//1. Logical and (&&)
console.log("a === b && b === c" , a === b && b === c);
//2. Logical or (||)
console.log("a === b || b === c", a === b || b ===c);
//3. Logical not (!)
console.log("a !== b", a !==b);