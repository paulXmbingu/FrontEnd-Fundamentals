// declarationd oof objects using objects literals and dot notations.
let FelixOuma={
    name : "Felix Ouma",
    Age :1,
    Achievment:"Got Promoted"

}
FelixOuma.wife ="Victorine"
console.log(FelixOuma.name, FelixOuma.Achievment, "and his wife is called miss",FelixOuma.wife)




//creating an object with properties and their values
var assistantManager = {
    rangeTilesPerTurn: 3,
    socialSkills: 30,
    streetSmarts: 30,
    health: 40,
    specialAbility: "young and ambitious",
    greeting: "Let's make some money"
}
console.log(assistantManager)
// by console .log of the assistanat manager will display the whole objects.
// However we use . notation to display a specific Item of the objects.
// For example we can log into the console health and display 40 by writing 
//           AssistantManager.health
// thats an example of .notation

let house={};
house.door =10;
house.window =17;
house.open = "24 hours"

console.log(house);

// the house object above has been decleared using the dot notation.
// the advantage of the flexibility above is that it can also be used in updating of the available values of the object.
// fro example
house.door=15;
console.log(house)


// This flexbility additionally means that I can update already existing properties, not just add new ones:  



// another thing that can be done by bracket notation but not  dot notation is that 
// raket notation can enameble on to iterate though an array.
// and also it can allow use of spacse or words being that the property keys within the brackets are arrays.

let arree = ['home','school','age','my birthday']
let last = {
    home :12,
    school: "Name",
    age:3,
    ['my birthday']: 30,
}
for (let i =0; i<arree.length; i++){
    console.log(last[arree[i]]);
}
