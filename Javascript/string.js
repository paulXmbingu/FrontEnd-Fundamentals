// string concatination code here
//  we want to add two string variable using the plus operator and the concat method
let greet= 'Hellow '
let Name = 'Felix??'
// concatination using plus operator
console.log(greet + Name);
// concatination using concate method
console.log(greet.concat(Name));
// the console bellow show the number of characters in the string above
console.log(greet.length);

// to read  index in the string then we use charAt() method
// example
console.log(greet.charAt(0));


// indexOf matches the first position of a character 
// Example
//  while last indexOf() gives the last position  of that string
console.log(greet.indexOf('f'));
console.log(greet.lastIndexOf('f'));



//     to chop up string to an array of sub string then we us the split() method.
// for exapmle
let figo = 'hel-llow-my-dear'
console.log(figo.split('-'))

// However if you console.log() the result is given as a single word and so given as one not different strings in an array

console.log(figo.length);

/*Here's a list of all the methods covered in this cheat sheet:
charAt() 
concat() 
indexOf() 
lastIndexOf() 
split() 
toUpperCase() 
toLowerCase()  

 */