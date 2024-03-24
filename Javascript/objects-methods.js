// Objects are just like any other data types whare they also take functions as data type as an example bellow
let car ={};
car.mileage = 98765;
car.color = "red";
console.log(car);

// use of functions in objects
car.turnTheKey = function(){
    console.log(("The engine is running"));
}
car.lightsOn = function(){
    console.log('The lights are on');
}
console.log(car);
car.turnTheKey();
car.lightsOn();
console.log(car.lightsOn);