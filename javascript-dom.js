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

// getElementById: HTMLElement
const ulFromId = document.getElementById('list');
console.log(ulFromId);
ulFromId.append(fragment);

// getElementsByClassName: HTMLCollection
const listItemsFromClassName = ulFromId.getElementsByClassName('list-item');
console.log(listItemsFromClassName);

// getElementsByTagName
const listItemsFromTagName = ulFromId.getElementsByTagName('li');
console.log(listItemsFromTagName);

//Live collection
const newListItem = document.createElement('li');
newListItem.className = 'list-item';
newListItem.innerText = 'Air';
ulFromId.append(newListItem);

console.log(listItemsFromClassName);
console.log(listItemsFromTagName);