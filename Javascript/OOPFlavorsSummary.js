/*
In my research, I’ve found there are four approaches to Object-Oriented Programming in JavaScript:

Using Constructor functions
Using Classes
Using Objects linking to other objects (OLOO)
Using Factory functions
*/
//  Using consctructor function

function Name(firstName, SecondName){
    this.firstName = firstName;
    this.SecondName = SecondName;
}
const Brian = new Name('Brian','Onyango');
console.log(Brian.firstName)
console.log(Brian.SecondName);


// Using class synax

class NameMadeWithClass{
    constructor(first, second){
        this.first =first;
        this.second =second;

    }
}
const fullName = new NameMadeWithClass('Felix', 'Ouma');
console.log(fullName.first,fullName.second)
console.log(fullName.second);


// Objects linking to other objects  (OLOO)
// we we declear variable as a normal object and in the body we use the init funtion  consructor
// However its not as strict as constructor fuction.

// Example
const NameWithOLOO = {
    init (fir,sec){
        this.fir = fir;
        this.sec =sec;

    }
}
let Faith = Object.create(NameWithOLOO)
Faith.init('Faith','Akinyi');
console.log(Faith.fir, Faith.sec)


//  Factory funtions 
// Here we return object and even OLOO
// Here you only call the functions without using new keyword to create another.


function  NameTwo(fa,se){
    return{
    fa,
    se
}}
let maina =NameTwo('Felo','Felozia')
console.log(maina.fa)
// Here we use return keyword to print out the properties in the brackets



// Declaring properties and methods
