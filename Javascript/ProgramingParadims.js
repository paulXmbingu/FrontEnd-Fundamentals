//  paradigms are methods of writing code  
// we have two main types that is FUNCTIONAL PROGRAMMING (FP) AND OBJECT-ORIENTED PROGRAMMING(OOP)
// Funtional programming is where we write function and call a given code only when we want the function to perform a certain task
 
// example
function addNumbers(a,b){
    return(a+b)
}
let car = addNumbers(3,6);
// the function is declread above and we only execute the the code to perfome agiven arithmatic after the functions.

console.log(car)



// Another style is object-oriented programming (OOP). 
// In this style, we group data and functionality as properties and methods inside objects.
// EXAMPPLE
var pet ={
    sleepy : true,
    snap : function(){
        this.sleepy=false;
    }

}
console.log(pet.sleepy);
pet.snap();
console.log(pet.sleepy);



// To summarize this point, we can say that the Functional Programming paradigm works by keeping the data and 
// functionality separate. It's counterpart, OOP, works by keeping the data and functionality grouped in meaningful 
// objects

// However There are many more concepts and ideas in functional programming.

// Here are some of the most important ones:

// First-class functions

// Higher-order function

// Pure functions and side-effects



// fisrst class funtions are  referd to us first class citizens
// this is by the fact that we can 
// ***********Set them as a variable
//**********  pass them to other fuctions
// ********* retun to other functios
// EXAMPLE BELLOW BEST EXPLAIN HOW IT WORKS

function addTwoNums(a,b){
    console.log(a+b);
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


// pure functions
function add(c,d){
    console.log(c+d);
}
add(84,4)