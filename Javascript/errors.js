let a ='Type error'
console.log(a);

// in javascript there may be an error through writing you code
/*The three main error types inlude

*********************TypeError
thi is whre someone uses something that is not neccesary
example

const a = 1
a = 2 // you reassign a const type variable again

//output
TypeError: Assignment to constant variable.

another example
const myArray = [1,2,3,4]
myArray = myArray.push(5) // reassign array

//output
TypeError: Assignment to constant variable.

// insead use this code to add an arrays
const myArray = [1,2,3,4]
myArray.push(5) // you can push new values

//output
[1,2,3,4,5]

                 
*/



let b ='Reference error'
console.log(b);

/*
Reference errors occur when you are trying 
to refer to or use something that does not exist.



Example

let a = 1
console.log(b) // undefined variable used

//output
Uncaught ReferenceError: b is not define

another exampple

if(true){
    let a = 1
}

console.log(a)

//output
ReferenceError: a is not defined

solution
if(true){
    let a = 1
    console.log(a)
}


//output
1

*/
 let c = "Syntax error"
 console.log(c);

 /*this error is formed by code that can not be read by Javascript engine.
 
Example you have forgoten to add parenthesis in your code or even clossing tags such
Example
let e ="example of syntax error
console.log(e)
this wiil return syntax error being that the sting do not have clossing tags

 
 
 
 */