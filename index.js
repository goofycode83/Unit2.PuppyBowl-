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
      const list = `<li>${user.name}</li>`;
      ol.insertAdjacentHTML(`beforeend`, list);
    })
    // renderAllPlayers();
  }catch (err) {
    console.error(err);
  }
}
getAllPlayers();
