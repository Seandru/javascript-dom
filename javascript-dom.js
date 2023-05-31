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

const list = document.querySelector('#list');
const selectedIndex = 2;

//querySelectorAll :NodeList
const queryChildren = list.querySelectorAll('li');
console.log(queryChildren[selectedIndex], queryChildren.length);

//.children :HTMLCollection
console.log(list.children[selectedIndex], list.children.length);

//.childNodes :NodeList
console.log(list.childNodes[selectedIndex], list.childNodes.length);

//first/last
console.log(list.firstChild, list.firstElementChild);
console.log(list.lastChild, list.lastElementChild);