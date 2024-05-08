const calculater = document.querySelector('.calc-container');

const display = document.querySelector('.display');

const Op2 = document.querySelectorAll('.op2');

const copy = Op2[0];
const clean = Op2[1];

const pLeft = document.getElementById('pLeft');

const pRight = document.getElementById('pRight');

const op = document.querySelectorAll('.op');

const teclas = [...document.querySelectorAll('.tecla')];

const resultado = document.getElementById('res');

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
            display.innerHTML+= event.target.textContent;
        }

        if(event.target.classList.contains('op') && isOp == false) {
            if(countTeclas > 0) {
                countTeclas = 0;
                isComma = false;
                isOp = true;
                opOff = false;
                display.innerHTML+= event.target.textContent;
            }

        } else if(!event.target.classList.contains('op')) {
            isOp = false;
        }

        if(event.target.classList.contains('comma') && isComma == false) {
            if(countTeclas > 0 && opOff == false) {
                isComma = true;
                display.innerHTML = event.target.textContent;
            }
        }

        if(event.target.classList.contains('p1')) {
            display.innerHTML+= event.target.textContent;

        } else if(event.target.classList.contains('p2')) {
            display.innerHTML+= event.target.textContent;
        }

        console.log(countTeclas);
        
    } 
 })

const printResultado = resultado.addEventListener('click', () => {
    let calculo;

    if(display.innerHTML.includes('x')) {
        calculo = eval(display.innerHTML.replace('x', '*'));

        display.innerHTML = calculo;
    } else {
        calculo = eval(display.innerHTML);

        display.innerHTML = calculo;
    }
}) 

// Função para lidar com eventos de teclado
function handleKeyPress(event) {
    const teclaPressionada = event.key;

    if(zero == false) {
        zero = true;
        display.innerHTML = "";
    }

    if (!isNaN(teclaPressionada)) {
        display.innerHTML += teclaPressionada;
    }

    else if (['+', '-', '*', 'x', '/', '(', ')'].includes(teclaPressionada)) {
        let calculo;

        if(display.innerHTML.includes('x')) {
            calculo = eval(display.innerHTML.replace('x', '*'));
    
            display.innerHTML = calculo;
        }
        display.innerHTML += teclaPressionada;
    }

    else if (teclaPressionada === 'Enter' || teclaPressionada === '=') {
        const calculo = display.innerHTML;
        const resultado = eval(calculo);
        display.innerHTML = resultado;
    }

    else if (teclaPressionada === 'c' || teclaPressionada === 'C') {
        display.innerHTML = '0';
    }

    else if (teclaPressionada === 'Backspace') {
        display.innerHTML = display.innerHTML.slice(0, -1);
    }

    // Atualiza o display com o estado atual da calculadora
    display.innerHTML = calculadora.expressao || '0';
}

document.addEventListener('keydown', handleKeyPress);

copy.addEventListener('click', () => {
    navigator.clipboard.writeText(display.innerHTML);
})


