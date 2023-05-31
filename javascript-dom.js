import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <ul id="list"></ul>
`;

const data = ['Earth', 'Fire', 'Water'];
const fragment = document.createDocumentFragment();

data.forEach(item => {
  const li = document.createElement('li');
  li.className = 'list-item';
  li.innerText = item;
  fragment.append(li);
});

// ul { background: red; }
// #list { background: red; }
const ulFromQuerySelector = document.querySelector('#list');
console.log(ulFromQuerySelector);

ulFromQuerySelector.append(fragment);

const listItemsFromQSA = ulFromQuerySelector.querySelectorAll('.list-item');
console.log(listItemsFromQSA);

const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromQuerySelector.append(newListItem);

console.log(
  listItemsFromQSA,
  ulFromQuerySelector.querySelectorAll('.list-item')
);
