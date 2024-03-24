// this is functional programming example where by variebles are  stored different with functions

let shoe = 100;
let tax = 1.2;
let total = 0;

function totalpay(amount, taa){
    return amount*taa
}
 total = totalpay(shoe, tax)
console.log(total)
// console.log(total) this way variables are stored differently with variables



/*
as pere the code 
First-class functions
It is often said that functions in JavaScript are “first-class citizens”. What does that mean?

It means that a function in JavaScript is just another value that we can:

pass to other functions

save in a variable

return from other functions

In other words, a function in JavaScript is just a value - from this vantage point, almost no different then a string or a number.

For example, in JavaScript, it's perfectly normal to pass a function invocation to another function.


*/

function addTwoNums(a, b) {
    console.log(a + b)
}

function randomNum() {
    return Math.floor((Math.random() * 10) + 1);
}
function specificNum() { return 42 };

var useRandom = true;

var getNumber;

if(useRandom) {
    getNumber = randomNum
} else {
    getNumber = specificNum
}

addTwoNums(getNumber(), getNumber()) 