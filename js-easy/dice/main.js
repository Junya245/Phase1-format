const startBtn  =
document.getElementById('btn');
const body =
document.querySelector('body');

const dice =
document.createElement('img');

body.appendChild(dice);
dice.style.width = '100px';
dice.style.height = '100px';

let dicenum =
'./img/saikoro1.png';

dice.setAttribute('src',dicenum);
