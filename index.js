const state = {
  playerArray: []
}

const getAllPlayers = async () => {
  try {
    const response = await fetch(`https://fsa-puppy-bowl.herokuapp.com/api/2310-fsa-et-web-ft-sf/players`);
    const result = await response.json();
    const playersInfo = result.data.players;
    const players = state.playerArray.push(playersInfo);
    return players;
  }catch (err) {
    console.error(err);
  }
}
getAllPlayers();


const renderAllPlayers = () => {
  const main = document.querySelector(`main`);
  const ol = document.createElement(`ol`);
  const li = document.createElement(`li`);
  main.appendChild(ol);
  ol.appendChild(li);
  console.log(li);
  li.innerText = getAllPlayers();
}

renderAllPlayers();