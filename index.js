const html = document.querySelector(`html`);
const body = document.querySelector(`body`);
const main = document.querySelector(`main`);
const h1 = document.querySelector(`h1`);
const ol = document.querySelector(`ol`);


const state = {
  playerArray: []
}

const getAllPlayers = async () => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`);
    const result = await response.json();
    const playersInfo = result.data.players;
    state.playerArray = playersInfo;
    console.log(state.playerArray);
    state.playerArray.forEach(user => {
      const list = `
      <li>
      <img src=${user.imageUrl} alt="puppy-picture"><br>
      <h3> ${user.name} </h3> 
      </li>`;
      ol.insertAdjacentHTML(`beforeend`, list);
    })
  }catch (err) {
    console.error(err);
  }
}
getAllPlayers();

const form = document.querySelector(`form`);
console.log(form);
form.addEventListener(`Submit` , async (event) => {
  event.preventDefault();
  const userInput = document.querySelector(`input`); 
  const inputNumber = input.value;
  try {
  const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`, {
    method: `POST`,
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      name: 'Rufus',
      breed: 'Irish Setter',
    }),
  });
  console.log(response);
  const newPuppy = await response.json();
}catch (err) {
  console.error(err);
}
  const newPuppyLI = document.createElement(`li`);
  newPuppyLI.innerText = newPuppy.name;
  const ul = document.querySelector(`ul`);
  ul.appendChild(newPuppyLI);
});
