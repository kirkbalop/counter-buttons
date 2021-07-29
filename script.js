// DOM selectors
const increment = document
    .querySelector('#increment')
    .addEventListener('click', plusOne)
const decrement = document
    .querySelector('#decrement')
    .addEventListener('click', minusOne)
const counter = document.querySelector('#counter')
let count = 0

// Functions
function plusOne() {
    count++
    console.log('PLUS')
    counter.textContent = count
    if(count > 0){
        counter.style.color = 'green'
    } else if (count === 0){
        counter.style.color = 'black'
    }
}

function minusOne(){
    count--
    console.log('MINUS')
    counter.textContent = count
    if(count < 0){
        counter.style.color = 'red'
    } else if (count === 0){
        counter.style.color = 'black'
    }
}
