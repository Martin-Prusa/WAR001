// Import stylesheets
import './style.css';

// Write Javascript code!
/*const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>JS Starter</h1>`;*/

//-------------------1----------------------
/*
const a = 10;
const b = 6;

console.log(a - b);
console.log(a + b);
console.log(a / b);
console.log(a * b);
console.log(a % b);
*/
//------------------2-------------------
const text = ` Typescript začal jako prototypovací scriptovací jazyk napsaný Brendanem Eichem v roce 1995 pro tehdejší Netscape browser pod názvem “Mocha”. `;

const edit = text
  .replaceAll(' ', '')
  .toLowerCase()
  .replaceAll('typescript', 'javascript');

console.log(edit.startsWith('javascript'));
console.log(edit);

//----------------------3---------------------
for (let i = 0; i < 8; i++) {
  console.log(`Mám rád javascript po ${i}!`);
}

const name = 'Martin'.split('').reverse().join('');
for (let i = 0; i < 3; i++) {
  console.log(name);
}

//----------------------4---------------------
const operace = '+';
const a = 10;
const b = 4;
let c = 0;

switch (operace) {
  case '+':
    c = a + b;
    break;
  case '-':
    c = a - b;
    break;
  case '%':
    c = a % b;
    break;
  case '*':
    c = a * b;
    break;
  case '/':
    c = a / b;
    break;
  default:
    console.error('Error');
    break;
}

console.log(a < 0 ? 'Záporné' : 'Kladné');

//-------------------5----------------
const arr = [3, 5, 7, 8, 11, 12, 13, 16, 17, 18].filter((i) => i % 2 === 0);
console.log(arr);

//-------------------5----------------
const myName = 'Martin Prusa'.split(' ');

console.log(`Jmeno: ${myName[0]}`);
console.log(`Prijmeni: ${myName[myName.length - 1]}`);
console.log(`Inicialy: ${myName[0][0]}${myName[myName.length - 1][0]}`);

//------------------6----------------------
