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
