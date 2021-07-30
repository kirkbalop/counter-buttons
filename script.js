// DOM selectors and event listeners
const increment = document
    .querySelector('#increment')
    .addEventListener('click', plusOne)
const decrement = document
    .querySelector('#decrement')
    .addEventListener('click', minusOne)
const counter = document.querySelector('#counter')
const counterContain = document.querySelector('.main-container')
const counterTitle = document.querySelector('#counterTitle')
let count = 0

// Functions
function plusOne() {
    count++
    counter.textContent = count
    if(count > 0){
        counter.style.color = 'mediumSeaGreen'
        counterContain.style.border = '5px mediumSeaGreen solid'
        counterTitle.style.color = 'mediumSeaGreen'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.border = '5px black solid'
        counterTitle.style.color = 'black'
    } 
}

function minusOne(){
    count--
    counter.textContent = count
    if(count < 0){
        counter.style.color = 'red'
        counterContain.style.border = '5px red solid'
        counterTitle.style.color = 'red'
    } else if (count === 0){
        counter.style.color = 'black'
        counterContain.style.border = '5px black solid'
        counterTitle.style.color = 'black'
    }
}