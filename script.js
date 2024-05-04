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
let opOff = false;
let pr = false;

let countTeclas = 0;



clean.addEventListener('click', () => {
    display.innerHTML = "0";
    zero = false;
    countTeclas = 0;
    isComma = false;
    opOff = false;
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
                countTeclas = 0;
                isComma = false;
                isOp = true;
                opOff = false;
                p.innerHTML = event.target.textContent;
            }

        } else if(!event.target.classList.contains('op')) {
            isOp = false;
        }

        if(event.target.classList.contains('comma') && isComma == false) {
            if(countTeclas > 0 && opOff == false) {
                isComma = true;
                p.innerHTML = event.target.textContent;
            }
        }

        if(event.target.classList.contains('p1')) {
            p.innerHTML = event.target.textContent;

        } else if(event.target.classList.contains('p2')) {
            p.innerHTML = event.target.textContent;
        }

        console.log(countTeclas);
        
    } 

    display.appendChild(p);
 })