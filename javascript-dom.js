import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form name="order">
    <label>
      Your name:
      <input type="text" name="fullname">
    <label>
      Which pizza would you like?
      <select name="pizza">
        <option value = "pepperoni">Pepperoni</option>
        <option value = "meaty">Meaty</option>
        <option value = "cheesy">Cheesy</option>
      </select>  
    </label>
    </label>
    <div>
      What size?
      <label>
        Small
        <input type="radio" name="size" value="small" checked>
      </label>
      <label>
        Medium
        <input type="radio" name="size" value="medium">
      </label>
      <label>
        Large
        <input type="radio" name="size" value="large">
      </label>
    </div>
    <label>
        Quantity
        <input type="number" name="quantity" value="1">
      </label>
    <button>
      Submit
    </button>
  </form>
`;

const form = document.forms.order;

function handleSubmit(event){
  event.preventDefault();
  //query string - fullname=FirstName+SecondName&pizza=pepperoni&size=large&quantity=2
  //content-type = application/x-www-form-urlencoded
  const formData = new FormData(event.target);
  // const data = [...formData.entries()];
  // const asString = data.map(x => `${encodeURIComponent(x[0])}=${encodeURIComponent(x[1])}`).join('&');
  // console.log(asString);
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);

  //json
  const asJSON = JSON.stringify(Object.fromEntries(formData));
  console.log(asJSON);
}

function handleFormData(event){
  console.log([...event.formData]);
  console.log([...event.formData.values()]);
  const entries = event.formData.entries();
  for(const entry of entries){
    console.log(entry);
  }
}

form.addEventListener('submit', handleSubmit);
form.addEventListener('formdata', handleFormData);