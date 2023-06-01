import '../assets/css/style.css';

const app = document.getElementById('app');
app.innerHTML = `
  <h1>JavaScript DOM</h1>
  <form>
    <label>
      Sign-up Email
      <input type="email">
    </label>
    <label>
      I agree to the terms
      <input type="checkbox">
    </label>
  </form>
`;

const form = document.querySelector('form');
const email = form.querySelector('input[type="email"]');
const checkbox = form.querySelector('input[type="checkbox"]');

function handleSubmit(event){
  if(!checkbox.checked){
  event.preventDefault();
  console.log('I am not submitting...');
  return;
  }
  console.log('Submitted', email.value);
}

form.addEventListener('submit', handleSubmit);
// no checking
//checkbox.addEventListener('click', event => {
//  event.preventDefault();
//})
