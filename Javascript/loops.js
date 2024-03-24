// for loops

for (let i = 1; i <=100; i++){
    if (i%3==0 && i%5==0){
        console.log("Fizz buzz")
     }
     else if (i%3==0){
        console.log("Fizz")
     } else if (i%5==0){
        console.log("buzz")

     } else{
        console.log(i);
     }
}






// while loop
let j =1;
while(j<=50){
    if(j%2==0 && j%3==0){
        console.log('come its a huge value')
    }else{
        console.log(j)
    }

   


    j++;
    
}




// use of switch statement
for (let i = 1; i <=100; i++)
switch(i){
   case(i%3==0 && i%5==0):
        console.log("Fizz buzz");
        break;
     
 case(i%3==0):
        console.log("Fizz");
        break;
  case(i%5==0):
        console.log("buzz");
        break;
        default:
            console.log(i);
     }



let da;
     switch(new Date().getDay()) {
        case 0:
            da="sunday";
            break;
        case 1:
            da = "Monday";
            break;
        case 2:
            da="Tuesday";
            break;
        case 3:
            da ="Wednesday";
            break;
        case 4:
            da= "Thursday";
            break;
        case 5:
            da = "Friday";
            break;
        case 6:
            da = "Saturday";
           
     }
     console.log("Today i a",da, "it the best day so far")




    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case  6:
        day = "Saturday";
    }
    console.log("Today is " + day)






    for (var i = 1; i <= 10; i++) {
        switch(i) {
            case 1:
                console.log("Gold medal")
                break
            case 2:
                console.log("Silver medal")
                break
            case 3:
                console.log("Bronze medal")
                break
            default:
                //this block will run if no condition matches
                console.log(i)
        }
    }
