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
  const asString = new URLSearchParams(formData).toString();
  console.log(asString);
  //json
  const asJSON = JSON.stringify(Object.fromEntries(formData));
  console.log(asJSON);
  
  fetch('/fakeapi', {
    method: 'post',
    headers: {
      //'Content-Type': 'application/x-www-form-urlencoded'
      'Content-Type': 'application/x-www-form-urlencoded'
    },
   // body: asString,
    body: asJSON,
  });
}



form.addEventListener('submit', handleSubmit);
