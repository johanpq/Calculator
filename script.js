const calculater = document.querySelector('.calc-container');

const display = document.querySelector('.display');

const Op2 = document.querySelectorAll('.op2');

const copy = Op2[0];
const clean = Op2[1];

const pLeft = document.getElementById('pLeft');

const pRight = document.getElementById('pRight');

const op = document.querySelectorAll('.op');

const teclas = [...document.querySelectorAll('.tecla')];

console.log(calculater);

let zero = false;
let isOp = false;
let isComma = false;

let countTeclas = 0;

clean.addEventListener('click', () => {
    display.innerHTML = "0";
    zero = false;
    countTeclas = 0;
} );

const print = document.addEventListener('click', (event) => {
    const p = document.createElement('p');

    if(event.target.classList.contains('tecla')) {
        if(zero == false) {
            zero = true;
            display.innerHTML = "";
        }

        if(event.target.classList.contains('number')) {
            countTeclas++
            p.innerHTML = event.target.textContent;
        }

        if(event.target.classList.contains('op') && isOp == false) {
            if(countTeclas > 0) {
                isOp = true;
                p.innerHTML = event.target.textContent;
            }

        } else if(!event.target.classList.contains('op')) {
            isOp = false;
        }

        console.log(countTeclas);
        
    } 

    display.appendChild(p);
 })