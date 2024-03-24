// the code bellow allow s one to add count especially used in adding counts to cart.
// when one clicksthe button its then counted.

const target = document.getElementById('butt')
function handleClick(){
    console.log('clicked the button');
}
target.addEventListener('click', handleClick)


// adding event listener directly to the html file

function handleClick2(){
   
        console.log('click the body to see the count')
        
    
}