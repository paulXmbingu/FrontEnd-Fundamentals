let car = []
// to add values to an array we use push() method
car.push('2 wheels', 'cow','ngombe')
// However to remove array from the last value we use pop()method
car.pop()
console.log(car)



// Arrays also works wwith the fuctions  for example
function arrayBuilder(one, two, three) {
    var arr = [];
    arr.push(one);
    arr.push(two);
    arr.push(three);
    return arr;
}
