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

const print = document.addEventListener('click', (event) => {
    const p = document.createElement('p');

    if(event.target.classList.contains('tecla')) {
        p.innerHTML = event.target.textContent;

        display.appendChild(p);
    }
})



