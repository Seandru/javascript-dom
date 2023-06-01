import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
  <div class="container">
    <label>
    Blue
      <input type="radio" name="color" value="blue" checked>
    </label>
    <label>
    Red
      <input type="radio" name="color" value="red">
    </label>
    <label>
    Green
      <input type="radio" name="color" value="green">
    </label>
  </div>
  </form>
`;

const form = document.forms.example;
const radios = [...form.elements.color];

//1. Useful properties
radios.forEach(radio => {
  console.log(radio.value);
  console.log(radio.checked);
})

//2. Events
const container = form.querySelector('.container');

container.addEventListener('change', () => {
  // console.log('Change...');
  // const checked = radios.find(radio => radio.checked).value;
  // console.log(checked);
  console.log(form.elements.color.value);
});










