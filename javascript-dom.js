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

const item = document.querySelector('.item');

console.log(item.parentNode);
console.log(item.parentElement.parentElement);
console.log(item.closest('#app'));
console.log(item.closest('body'));

const listItem = document.querySelector('#list li');

//DOM nodes
console.log(listItem.nextSibling);
console.log(listItem.previousSibling);

//Element nodes
console.log(listItem.nextElementSibling);
console.log(listItem.previousElementSibling);
