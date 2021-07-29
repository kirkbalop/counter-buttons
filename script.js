// DOM selectors
const increment = document
    .querySelector('#increment')
    .addEventListener('click', plusOne)
const decrement = document
    .querySelector('#decrement')
    .addEventListener('click', minusOne)
const counter = document.querySelector('#counter')
const counterContain = document.querySelector('.main-container')
let count = 0

// Functions
function plusOne() {
    count++
    console.log('PLUS')
    counter.textContent = count
    if(count > 0){
        counter.style.color = 'green'
        counterContain.style.border = '5px green solid'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.border = '5px black solid'
    }
}

function minusOne(){
    count--
    console.log('MINUS')
    counter.textContent = count
    if(count < 0){
        counter.style.color = 'red'
        counterContain.style.border = '5px red solid'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.border = '5px black solid'
    }
}
