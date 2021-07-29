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
        counterContain.style.boxShadow = '5px 10px green'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.boxShadow = '5px 10px black'
    }
}

function minusOne(){
    count--
    console.log('MINUS')
    counter.textContent = count
    if(count < 0){
        counter.style.color = 'red'
        counterContain.style.boxShadow = '5px 10px red'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.boxShadow = '5px 10px black'
    }
}
