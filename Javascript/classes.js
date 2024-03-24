// class funtion are defined using class keyword and the class name is writen by first letter being capital.
// Its then fllowd by construcstor keyword where the parameters are included
// Example
//  class Train{
//     constructor(color, lightOn){
//         this.color = color;
//         this.lightOn = lightOn;

     
//  }}

//  You notice that from the code above there is no function keyward used and so class keyward only uses the constructor 
//  from the code above what does the This keyword stand for or used for.

//  we can then add other properties to it by using the new keyword.
 
// Example
//  let trainOne = new Train('red', true)
//  console.log(trainOne);
//  trainOne.lightOn=false;
//  console.log(trainOne);



//  You can also add methods to classes, and these methods will then be shared by all future instance objects of my 
// Train class.

class Train {
    constructor(color, lightsOn) {
        this.color = color;
        this.lightsOn = lightsOn;
    }
    toggleLights() {
        this.lightsOn = !this.lightsOn;
    }
    lightsStatus() {
        console.log('Lights on?', this.lightsOn);
    }
    getSelf() {
        console.log(this);
    }
    getPrototype() {
        var proto = Object.getPrototypeOf(this);
        console.log(proto);
    }
}

/*Now, there are four methods on your Train class: 
toggleLights(), lightsStatus(),  getSelf() and getPrototype().

The toggleLights method uses the logical not operator, !. This operator will change the value stored in the
 lightsOn property of the future instance object of the Train class; hence the !this.lightsOn. And the =
  operator to its left means that it will get assigned to this.lightsOn, meaning that it will become the new
   value of the lightsOn property on that given instance object.

The lightsStatus() method on the Train class just reports the current status of the lightsOn variable of a given 
object instance.

The getSelf() method prints out the properties on the object instance it is called on.

The getPrototype() console logs the prototype of the object instance of the Train class. The prototype holds all 
the properties shared by all the object instances of the Train class. To get the prototype, you'll be using 
JavaScript's built-in Object.getPrototypeOf() method, and passing it this object - meaning, the object instance 
inside of which this method is invoked. */


// thisi is the entire code for classes



class HighSpeedTrain extends Train {
    constructor(passengers, highSpeedOn, color, lightsOn) {
        super(color, lightsOn);
        this.passengers = passengers;
        this.highSpeedOn = highSpeedOn;
    }
    toggleHighSpeed() {
        this.highSpeedOn = !this.highSpeedOn;
        console.log('High speed status:', this.highSpeedOn);
    }
    toggleLights() {
        super.toggleLights();
        super.lightsStatus();
        console.log('Lights are 100% operational.');
    }
}

var myFirstTrain = new Train('red', false);
console.log(myFirstTrain); // Train {color: 'red', lightsOn: false}
var mySecondTrain = new Train('blue', false);
var myThirdTrain = new Train('blue', false);

var train4 = new Train('red', false);
train4.toggleLights(); // undefined
train4.lightsStatus(); // Lights on? true
train4.getSelf(); // Train {color: 'red', lightsOn: true}
train4.getPrototype(); // {constructor: f, toggleLights: f, ligthsStatus: f, getSelf: f, getPrototype: f}

var train5 = new Train('blue', false);
var highSpeed1 = new HighSpeedTrain(200, false, 'green', false);

train5.toggleLights(); // undefined
train5.lightsStatus(); // Lights on? true
highSpeed1.toggleLights(); // Lights on? true, Lights are 100% operational.



class Animal {
    constructor(leg, Head,hover){
        this.leg =leg;
        this.Head = Head;
        this.hover = hover;
    }
    
}
class cow extends Animal{
    constructor(leg, Head,hover,bodyWeight){
        super(leg, Head,hover);
        this.bodyWeight = bodyWeight;
        console.log (this.cow)
    }
}
var anotherAnimal = new Animal(4, 'one', true)
console.log(anotherAnimal);
anotherAnimal.hover = false;
console.log(anotherAnimal);
