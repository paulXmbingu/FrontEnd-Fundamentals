/*
The codein the coment bellow throws a type of error showing that objects are not iterable
However arrays are iterable

const car = {
    speed: 100,
    color: "blue"
}

for(prop of car) {
    console.log(prop)
}

*/

//  this are the methods used to iterate through an objects Object.keys(), Object.values(), and Object.entries().
// objcts are no iterable
// threfore wei have to use objec keys wich allows it to iterate inside i=ofn 
// / the one below is an example of object.key() method used

const car2 = {
    speed: 200,
    color: "red"
}
console.log(Object.keys(car2));


// Another useful method is Object.values():
const car3 = {
    speed: 300,
    color: "yellow"
}
console.log(Object.values(car3));



// The Object.entries() method
// Finally, there's another useful method, Object.entries(), which returns an array listing both the keys and the values. 
const car4 = {
    speed: 400,
    color: 'magenta'
}
console.log(Object.entries(car4)); 


// Now you can loop through an object through arrays 
var clothingItem = {
    price: 50,
    color: 'beige',
    material: 'cotton',
    season: 'autumn'
}

for( const key of Object.keys(clothingItem) ) {
    console.log(key, ":", clothingItem[key])
}

// remember the trickiest way to understant
