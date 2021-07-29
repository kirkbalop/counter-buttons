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
}

function minusOne(){
    count--
    console.log('MINUS')
    counter.textContent = count
}