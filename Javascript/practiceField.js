// passing funtion as an urgument

function sayHellow(){
    return 'Hellow'
}
function greetme(Greetings,Name){
    console.log(Greetings(),Name); 
}
greetme(sayHellow,'Javascript  youre agreate language to learn')



// OOP PRINCIPLES OF POLIMORPHS
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


bicycle.bell();

class Bird {
    useWings() {
        console.log("Flying!")
    }
}
class Eagle extends Bird {
    useWings() {
        super.useWings()
        console.log("Barely flapping!")
    }
}
class Penguin extends Bird {
    useWings() {
        console.log("Diving!")
    }
}
var baldEagle = new Eagle();
var kingPenguin = new Penguin();
baldEagle.useWings(); 
kingPenguin.useWings();


// purchase oop

   let shoe=100;
   let tax = 1.2;
    function total(shoe, tax){
        return shoe*tax
    }
    var here =total(500,8);
    console.log(here);
   

