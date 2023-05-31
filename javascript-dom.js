import './assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
`;

const div = document.createElement('div');
const span = document.createElement('span');
const p = document.createElement('p');
const i = document.createElement('i');
const b = document.createElement('b');

div.append(span);
div.prepend(p);
// p.before(i);
p.after(i);
i.parentNode.insertBefore(b, i.nextSibling);

console.log(div);