import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `<h1>JavaScript DOM </h1>`;

const h1 = document.createElement('h1');
h1.innerText = 'some text here';
h1.style.color = 'Tomato';
h1.innerText += ' another text here';

app.append(h1);

console.log(app.innerHTML);
console.log(app.innerText);
console.log(app.textContent);

