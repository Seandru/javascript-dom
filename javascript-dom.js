import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="example">
    <select name="drink">
      <option value="">Select Your Drink...</option>
      <option value="lemonade" selected>Lemonade</option>
      <option value="cola">Cola</option>
      <option value="water">Water</option>
    </select>
  </form>
`;

const form = document.forms.example;
const select = form.elements.drink;


//1. Selected value
select.value = 'water';
console.log(select.value);

//2. Selected index
const id = 2;
select.selectedIndex = id;
console.dir(select.selectedIndex);

//3. Selected DOM Element
console.log(select.options[select.selectedIndex]);

//4. Events
select.addEventListener('change', () => {
  console.log(select.value);
  console.log(select.selectedIndex);
  console.log(select.options[select.selectedIndex]);
})

//5. Add new <option>
const option = document.createElement('option');
option.value = 'milk';
option.text = 'Milk';

select.add(option, 1);