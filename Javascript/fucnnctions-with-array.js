// evoking array functions.
function newArray(arr){
    for(let i=0; i< arr.length; i++){
        console.log(arr[i])
    }
}
let animals = ["Cow","Goat","Sheep","Camel","Donkey"]
newArray(animals[1]);






//function that takes an array as input and display all items of this array
function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log(i, arr[i])
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors[3]);




function listArrayItems(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == 'red') {
            console.log(i*100, "tomato!")
        } else {
            console.log(i*100, arr[i])
        }
    }
}
var colors = ['red', 'orange', 'yellow', 'green', 'blue', 'purple', 'pink'];
listArrayItems(colors);



// iteration of arrays
function letterFinder (word, match){
    for(let i = 0; i<word.length; i++){
        if(word[i]==match){
            console.log('Found the', match, 'at', i)
        }else {
            console.log('---No match found at', i)
        }

    }
}
letterFinder("test","t")
