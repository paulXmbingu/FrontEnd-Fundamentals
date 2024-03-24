let greet = " Hello good evening"
// The above ia a global scope and can be accesed from anywhare within the code
function call(){
    let cry = "Fuck you"+ greet;

//   this is a local scope and can only be accesed inside of the function.
   
}
call()

/*------------------------------------------ FUNTIONAL PROGRAMING (Fp)-------------------------------------------- */
// when writing a functional programing the variable shouled be outside the function and only called when required.
// EXAMLE
 function speed(d,t){
    return d/t
 }
  let distance = 240;
  let  tim = 4;
  let totalSpeed = speed(distance,tim);
  console.log(totalSpeed);

  /*------------------------------------object-oriented programming (OOP)  ----------------------- */
//   In this style, we group data and functionality as properties and methods inside objects.
// in object -oriented programing it easy to update instead of using another return key
// EXAMPLE
  
let pet = {
    sleepy : true,
    cry :function(){
        this.sleepy=false;
        

    }
}
console.log(pet.sleepy)
pet.cry()
console.log(pet.sleepy);


/*To summarize this point, we can say that the Functional Programming paradigm works
 by keeping the data and functionality separate. It's counterpart, OOP, works by keeping 
 the data and functionality grouped in meaningful objects.*/