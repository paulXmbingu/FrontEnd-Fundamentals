//  A function delaration is done by calling the word function followed by parenthesis,and calibraces then the code bodey
//  agood example as bellow
function square(number){
    console.log(number*number)

}
square(3)



function myFunc(theObject) {
    theObject.make = "Toyota";
  }
  
  const mycar = {
    make: "Honda",
    model: "Accord",
    year: 1998,
  };
  
  console.log(mycar.make); 
  myFunc(mycar);
  console.log(mycar.make); 
  