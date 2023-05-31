import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list">
    <li>Earth</li>
    <li>Fire</li>
    <li>Water</li>
    <li>Air</li>
  </ul>
`;

import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Close Me
  </button>
  <input type="text">
`;

const input = document.querySelector('input');
//input.value = 2;
input.setAttribute('value', 2);
console.log(input.value);
console.dir(input);

const button = document.querySelector('button');
//set
button.setAttribute('aria-label', 'Close this Modal');
//get
const value = button.getAttribute('aria-label');
console.log(value);
//.attributes
console.log(button.attributes['aria-label']);