// this is the use of stored data in a single object and literally used by all variables.\
// its stored and accesd by all

// exapmle
let bird ={
    canFly:true,
    hasWings:true,
    hasTwoLeggs:true

}
let pinguine1 = Object.create(bird)
console.log('pinguine can fly', pinguine1.canFly)
console.log(pinguine1.hasTwoLeggs);
let hen = Object.create(bird);
hen.canFly= false;
console.log(hen.canFly);

// By using prototyoe you can use a singlew object properties and manipulate its data in various ways.
// you an change the information based on how you want it to apear in every Object

let ostritch = Object.create(bird)
ostritch.hasWings = false;
console.log('Its the most first bird and has wings',ostritch.hasWings, 'Its',ostritch.hasWings,'because it has no wings')