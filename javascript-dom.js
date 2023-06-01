import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <button type="button">
    Click Me
  </button>
`;

const button = document.querySelector('button');

//doesn't allow multiple events
//button.onclick = function(){
  //console.log('1');
//};

function handleClick(event){
  console.log(this, event.target);
}

button.addEventListener('click', handleClick);

button.addEventListener('click', event => {
  console.log(this, event.target, 'Double clicked!')
});

function handleClickOnce(event) {
  console.log(event.target);
  button.removeEventListener('click', handleClickOnce);
}

button.addEventListener('click', handleClickOnce);