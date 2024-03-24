
// here all functions and variebles ara stored in same ojects
// Example
// lets begin with funtinala programing
let shoe = 105;
tax = 1.3;
 function totalAmount(shoe,tax){
   var total = shoe*tax;
   console.log(total);
 }
 totalAmount(shoe,tax)

//  the code above is all about functional programing.
// Here we create variables and functions in a different whre a given task is performed.

// NOw lets explore all about  Object Oriented Programing
// Here by the use of this keyword its posible to use a single function in diferent objects to perfonm same function.

var purchase1 ={
   shoes:300,
   tax:1.5,
   totalAmount: function(){
       var calculations = this.shoes *this.tax;
       console.log('The total amount is', calculations)
   }
}
purchase1.totalAmount()


var purchase2 ={
   shoes:90,
   tax:1.5,
   totalAmount: function(){
       var calculations = this.shoes *this.tax;
       console.log('The total amount is', calculations)
   }
}
purchase2.totalAmount()


// by using this Keyword the totalAmount function section has been used for both
// purchase1 and purchase2 instaed of  writing same code .



// WE have different properties of  OOP namely
// Inheritance
// Polimorphs
// encapsulatio and Absraction


// inheritence is where a n objects inherits from a nother referd to as super class and the extends keyword is used


const bicycle = {
   bell: function() {
       return "Ring, ring! Watch out, please!"
   }
}
const door = {
   bell: function() {
       return "Ring, ring! Come here, please!"
   }
}
function ringTheBell(thing) {
   console.log(thing.bell())
}
ringTheBell(bicycle);
ringTheBell(door);

//  from the code above bell is used in opposite ways depending on the objects used.
//  thisi is making it more general for coding
